import re
import os
import shutil
from pathlib import Path

DOCS_DIR = Path("docs")
STATIC_FILES_DIR = Path("static/files")
STATIC_IMG_DIR = Path("static/img")
PROJECT_ROOT = Path("/Users/sartipaz/Documents/zauru/code/docs-zauru")

pattern = re.compile(r'!\[([^\]]*)\]\(/files/([^/]+)/([^)]+)\)')

migrations = []

for md_file in sorted(PROJECT_ROOT.joinpath(DOCS_DIR).rglob("*.md")):
    relative = md_file.relative_to(PROJECT_ROOT.joinpath(DOCS_DIR))
    doc_folder = str(relative.parent)
    doc_stem = relative.stem  # e.g., "casos-cerrar-un-caso"
    
    content = md_file.read_text(encoding="utf-8")
    matches = list(pattern.finditer(content))
    
    if not matches:
        continue
    
    for idx, m in enumerate(matches, start=1):
        alt_text = m.group(1)
        hash_dir = m.group(2)
        filename = m.group(3)
        ext = Path(filename).suffix
        
        source = PROJECT_ROOT.joinpath(STATIC_FILES_DIR, hash_dir, filename)
        new_name = f"{doc_stem}-{idx}{ext}"
        dest_dir = PROJECT_ROOT.joinpath(STATIC_IMG_DIR, doc_folder)
        dest = dest_dir.joinpath(new_name)
        
        if not source.exists():
            print(f"WARNING: source not found: {source}")
            continue
        
        migrations.append((md_file, m.start(), m.end(), alt_text, source, dest, idx, relative))

# Copy images and update files
# Process in reverse order per file to keep positions valid
by_file = {}
for md_file, start, end, alt_text, source, dest, idx, relative in migrations:
    by_file.setdefault(md_file, []).append((start, end, alt_text, source, dest, idx, relative))

for md_file, entries in sorted(by_file.items()):
    content = md_file.read_text(encoding="utf-8")
    
    # Sort descending by position to replace from end to start
    entries.sort(key=lambda x: x[0], reverse=True)
    
    for start, end, alt_text, source, dest, idx, relative in entries:
        dest.parent.mkdir(parents=True, exist_ok=True)
        
        new_path = f"/img/{relative.parent}/{dest.name}"
        new_path = new_path.replace("\\", "/")
        old_markdown = content[start:end]
        new_markdown = f"![{alt_text}]({new_path})"
        content = content[:start] + new_markdown + content[end:]
        
        if not dest.exists():
            shutil.copy2(source, dest)
            print(f"COPIED: {source} -> {dest}")
        else:
            print(f"SKIP (exists): {dest}")
    
    md_file.write_text(content, encoding="utf-8")
    print(f"UPDATED: {md_file}")

print(f"\nDone! {len(migrations)} images migrated.")
