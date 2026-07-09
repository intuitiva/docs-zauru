#!/usr/bin/env python3
"""
Download all remote Contentful/Cloudinary assets referenced from docs/
into static/files/ and rewrite the markdown to point at the local copies.

Local layout:  static/files/<hash>/<filename>
URL in docs:   /files/<hash>/<filename>

The <hash> is the 3rd path segment of the Contentful URL and is unique per
asset, so we never collide. Assets referenced from multiple docs are downloaded
once and reused.

URLs inside fenced code blocks (```...```) are left untouched — they're usually
example API responses, not real images to host.

Idempotent: re-running skips already-downloaded files and only rewrites markdown
whose remote URLs are still present.

Usage:
    python3 download_images.py           # download + rewrite
    python3 download_images.py --dry-run # print what would change, download nothing
    python3 download_images.py --only-rewrite  # rewrite markdown, assume files exist
"""
import argparse
import concurrent.futures
import hashlib
import os
import re
import shutil
import sys
import urllib.request
import urllib.error

ROOT = os.path.dirname(os.path.abspath(__file__))
DOCS = os.path.join(ROOT, "docs")
STATIC = os.path.join(ROOT, "static", "files")

# Hosts we mirror locally.
HOSTS = ("images.ctfassets.net", "assets.ctfassets.net", "downloads.ctfassets.net", "res.cloudinary.com")

URL_RE = re.compile(r"https?://(?:" + "|".join(re.escape(h) for h in HOSTS) + r")/[^\s)\"'<>]+")

# A URL is "inside" one of these wrapping markdown constructs — we only rewrite
# the part inside the parens of ![alt](URL) or [text](URL), or the href="URL" of
# an <img>/<a>/<source>/<video> tag. We don't replace URLs that appear bare in
# prose, because those are unlikely to be assets and could be links.
MD_LINK_RE = re.compile(r"(!\[[^\]]*\]\()" + r"(" + URL_RE.pattern + r")" + r"(\))")
HTML_ATTR_RE = re.compile(
    r'((?:src|href)\s*=\s*["\'])(' + URL_RE.pattern + r')(["\'])'
)


def parse_args():
    p = argparse.ArgumentParser()
    p.add_argument("--dry-run", action="store_true")
    p.add_argument("--only-rewrite", action="store_true", help="don't download, just rewrite markdown")
    p.add_argument("--jobs", type=int, default=8, help="parallel download workers")
    return p.parse_args()


def url_to_local_path(url):
    """
    Map a remote URL to:
       local filesystem path: static/files/<hash>/<filename>
       public URL used in md:  /files/<hash>/<filename>
    Returns (fs_path, public_url).
    """
    # Strip query string if any.
    clean = url.split("#", 1)[0].split("?", 1)[0]
    parts = clean.split("/")
    # parts: ['https:', '', '<host>', '<space>', '<entry>', '<hash>', '<filename>']
    # For cloudinary: ['https:', '', 'res.cloudinary.com', '<acct>', 'image', 'upload', 'v146', '<file>']
    if len(parts) >= 6 and parts[-2] and parts[-1]:
        hash_seg = parts[-2]
        # Cloudinary uses short version segments like 'v146'; prefix with host to stay unique.
        if "cloudinary" in parts[2]:
            hash_seg = hashlib.sha1(clean.encode()).hexdigest()[:16]
        filename = parts[-1]
    else:
        # Fallback: hash the whole URL.
        hash_seg = hashlib.sha1(clean.encode()).hexdigest()[:16]
        filename = parts[-1] if parts else "asset"

    # Sanitize filename — keep it as-is, but make sure it doesn't have path separators.
    filename = filename.replace("/", "_").replace("\\", "_")
    # Some legacy files have trailing spaces ('existencias-de-items-de-un-proveedor  .md' style).
    filename = filename.strip()

    fs = os.path.join(STATIC, hash_seg, filename)
    public = f"/files/{hash_seg}/{filename}"
    return fs, public


def collect_urls():
    """Return dict: url -> list of (md_file_path, line_no). Only URLs outside fenced code blocks."""
    refs = {}
    for dirpath, _dirs, files in os.walk(DOCS):
        for fn in files:
            if not fn.endswith(".md"):
                continue
            path = os.path.join(dirpath, fn)
            in_code = False
            with open(path, "r", encoding="utf-8") as f:
                for i, line in enumerate(f, 1):
                    if line.lstrip().startswith("```"):
                        in_code = not in_code
                        continue
                    if in_code:
                        continue
                    for m in URL_RE.finditer(line):
                        url = m.group(0)
                        # Trim trailing punctuation that markdown URLs don't include.
                        url = url.rstrip(".,;:!?")
                        refs.setdefault(url, []).append((path, i))
    return refs


def fetch(url, dest, dry, only_rewrite, timeout=30):
    if os.path.exists(dest):
        return ("ok", url, dest, "cached")
    if only_rewrite:
        # Build the expected local path; we still rewrite the markdown, but warn at end.
        return ("missing", url, dest, "file not present locally")
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    if dry:
        return ("would-fetch", url, dest, "")
    # Switch to https if it was protocol-relative or http.
    if url.startswith("//"):
        url = "https:" + url
    elif url.startswith("http://"):
        url = "https://" + url[len("http://"):]
    req = urllib.request.Request(url, headers={"User-Agent": "zauru-docs-image-importer/1.0"})
    try:
        with urllib.request.urlopen(req, timeout=timeout) as r:
            data = r.read()
    except urllib.error.HTTPError as e:
        return ("fail", url, dest, f"HTTP {e.code}")
    except Exception as e:
        return ("fail", url, dest, str(e))
    with open(dest, "wb") as f:
        f.write(data)
    return ("ok", url, dest, f"{len(data)} bytes")


def rewrite_markdown(url_to_public):
    """Rewrite every .md in docs/ to replace remote URLs with local /files/... paths.
    Returns number of files changed."""
    changed = 0
    md_link_re = re.compile(
        r"(!\[[^\]]*\]\()(" + URL_RE.pattern + r")(\))"
    )
    html_attr_re = re.compile(
        r'((?:src|href)\s*=\s*["\'])(' + URL_RE.pattern + r')(["\'])'
    )
    # Reference-style link definitions:  [id]: url  "optional title"
    ref_def_re = re.compile(
        r'^(\[[^\]]+\]:\s*)(' + URL_RE.pattern + r')(\s.*)?$',
        re.MULTILINE,
    )

    for dirpath, _dirs, files in os.walk(DOCS):
        for fn in files:
            if not fn.endswith(".md"):
                continue
            path = os.path.join(dirpath, fn)
            with open(path, "r", encoding="utf-8") as f:
                src = f.read()

            def md_sub(m):
                url = m.group(2).rstrip(".,;:!?")
                pub = url_to_public.get(url)
                return f"{m.group(1)}{pub}{m.group(3)}" if pub else m.group(0)

            def html_sub(m):
                url = m.group(2).rstrip(".,;:!?")
                pub = url_to_public.get(url)
                return f'{m.group(1)}{pub}{m.group(3)}' if pub else m.group(0)

            def ref_sub(m):
                url = m.group(2).rstrip(".,;:!?")
                pub = url_to_public.get(url)
                if not pub:
                    return m.group(0)
                tail = m.group(3) or ""
                return f"{m.group(1)}{pub}{tail}"

            out = md_link_re.sub(md_sub, src)
            out = html_attr_re.sub(html_sub, out)
            out = ref_def_re.sub(ref_sub, out)

            if out != src:
                changed += 1
                with open(path, "w", encoding="utf-8") as f:
                    f.write(out)
    return changed


def main():
    args = parse_args()
    refs = collect_urls()
    if not refs:
        print("No remote asset URLs found in docs/.")
        return

    print(f"Found {len(refs)} unique remote URLs across {sum(len(v) for v in refs.values())} references.")

    url_to_public = {}
    for url in refs:
        fs, pub = url_to_local_path(url)
        url_to_public[url] = pub

    if args.dry_run:
        for url in sorted(refs):
            fs, pub = url_to_local_path(url)
            print(f"  {url}\n    -> {pub}")
        return

    os.makedirs(STATIC, exist_ok=True)
    results = {"ok": 0, "cached": 0, "fail": 0, "missing": 0, "would-fetch": 0}
    failures = []
    succeeded = set()
    with concurrent.futures.ThreadPoolExecutor(max_workers=args.jobs) as ex:
        futures = []
        for url in refs:
            fs, pub = url_to_local_path(url)
            futures.append(ex.submit(fetch, url, fs, args.dry_run, args.only_rewrite))
        for fut in concurrent.futures.as_completed(futures):
            status, url, dest, note = fut.result()
            if status in ("ok", "cached", "missing" if args.only_rewrite else "ok"):
                results["cached" if status == "cached" else "ok"] += 1
                succeeded.add(url)
            elif status == "fail":
                results["fail"] += 1
                failures.append((url, note))
            elif status == "missing":
                results["missing"] += 1
                failures.append((url, "file not present (use --only-rewrite only after download)"))
            elif status == "would-fetch":
                results["would-fetch"] += 1
                succeeded.add(url)  # dry-run: pretend it succeeded so we still rewrite

    print()
    print(f"Downloads:   {results['ok']} new, {results['cached']} cached, {results['would-fetch']} would-fetch (dry-run)")
    print(f"Failures:    {results['fail']}")
    print(f"Missing:     {results['missing']}")

    if failures:
        print("\nFailed / missing URLs (references left pointing at the original URL):")
        for url, note in failures:
            print(f"  {url}  ({note})")

    # Only rewrite URLs that downloaded successfully; leave 404s as-is so they
    # don't 404 *twice* (broken external link is better than broken local link).
    url_to_public = {url: pub for url, pub in url_to_public.items() if url in succeeded}
    if url_to_public:
        changed = rewrite_markdown(url_to_public)
        print(f"\nRewrote {changed} markdown files to use local /files/ paths.")


if __name__ == "__main__":
    main()