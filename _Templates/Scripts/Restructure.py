import os
import re

# Define the mapping of folder names to template files
TEMPLATE_MAP = {
    "Locations": "_Templates/Location.md",
    "NPCs": "_Templates/NPC.md",
    "Organisations": "_Templates/Organisation.md",
    "Player Characters": "_Templates/Player.md"
}

# Helper to read a template file
def read_template(template_path):
    with open(template_path, encoding="utf-8") as f:
        return f.read()

# Helper to extract YAML frontmatter and body
def split_frontmatter(content):
    match = re.match(r"(?s)^---\n(.*?)\n---\n(.*)", content)
    if match:
        return match.group(1), match.group(2)
    return "", content

# Main restructuring function
def restructure_note(note_path, template_content):
    note_content = open(note_path, encoding="utf-8").read()
    _, note_body = split_frontmatter(note_content)
    template_front, template_body = split_frontmatter(template_content)
    # Merge: use template frontmatter, keep note body in the right section
    # (You may want to parse and merge YAML for more advanced use)
    new_content = f"---\n{template_front}\n---\n{template_body.strip()}\n\n# Original Content\n{note_body.strip()}\n"
    return new_content

def process_folder(root, folder, template_path):
    template_content = read_template(template_path)
    folder_path = os.path.join(root, folder)
    for dirpath, _, filenames in os.walk(folder_path):
        for filename in filenames:
            if filename.endswith(".md"):
                note_path = os.path.join(dirpath, filename)
                new_content = restructure_note(note_path, template_content)
                print(f"--- {note_path} ---\n{new_content}\n{'='*80}\n")

if __name__ == "__main__":
    root = "c:/Users/chrisc/Documents/Obsidian/Mysteries-of-Rankhra/World Notes"
    for folder, template in TEMPLATE_MAP.items():
        process_folder(root, folder, os.path.join("c:/Users/chrisc/Documents/Obsidian/Mysteries-of-Rankhra", template))
