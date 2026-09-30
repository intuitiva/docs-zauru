import os
import subprocess
import sys

DOCS_PATH = "/home/intuitiva/code/docs-zauru/docs"

def strip_frontmatter(content):
    """Remove YAML frontmatter from markdown content."""
    lines = content.split('\n')
    if lines and lines[0].strip() == '---':
        for i, line in enumerate(lines[1:], 1):
            if line.strip() == '---':
                return '\n'.join(lines[i+1:]).lstrip('\n')
    return content

def get_md_files(path):
    """Get all .md files recursively."""
    md_files = []
    for root, dirs, files in os.walk(path):
        for f in files:
            if f.endswith('.md'):
                full_path = os.path.join(root, f)
                rel_path = os.path.relpath(full_path, path)
                md_files.append((full_path, rel_path))
    return sorted(md_files)

def escape_sql(text):
    """Escape single quotes for SQL."""
    return text.replace("'", "''")

def main():
    md_files = get_md_files(DOCS_PATH)
    print(f"Found {len(md_files)} .md files")
    
    for full_path, rel_path in md_files:
        with open(full_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Strip frontmatter
        content = strip_frontmatter(content)
        
        # Escape for SQL
        content_escaped = escape_sql(content)
        path_escaped = escape_sql(rel_path)
        
        # Insert into database with path
        sql = f"INSERT INTO data (tutorial, path) VALUES ('{content_escaped}', '{path_escaped}');"
        
        try:
            result = subprocess.run(
                ['psql', '-U', 'finanzas', '-d', 'rag', '-c', sql],
                capture_output=True,
                text=True,
                timeout=30
            )
            if result.returncode != 0:
                print(f"Error inserting {rel_path}: {result.stderr}")
            else:
                print(f"Inserted: {rel_path}")
        except subprocess.TimeoutExpired:
            print(f"Timeout inserting {rel_path}")
        except Exception as e:
            print(f"Error inserting {rel_path}: {e}")

if __name__ == '__main__':
    main()
