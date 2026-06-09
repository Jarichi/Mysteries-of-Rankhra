#!/bin/py
import os
import argparse

def batch_replace_ends():
    # Set up command-line argument parsing
    parser = argparse.ArgumentParser(
        description="Replace the last N lines of files in a directory with the contents of a format file."
    )
    parser.add_argument(
        '-f', '--format', 
        required=True, 
        help="Path to the format file containing the new ending."
    )
    parser.add_argument(
        '-d', '--directory', 
        default='.', 
        help="Directory to process (default: current directory)."
    )
    parser.add_argument(
        '-e', '--extension', 
        default='.md', 
        help="File extension to target, including the dot (default: .md)."
    )
    
    args = parser.parse_args()

    # Verify format file exists
    if not os.path.isfile(args.format):
        print(f"Error: Format file '{args.format}' not found.")
        return

    # Read the content of the format file
    with open(args.format, 'r', encoding='utf-8') as f:
        format_content = f.readlines()
        n = len(format_content)

    if n == 0:
        print("Warning: The format file is empty. This will just delete the last 0 lines.")

    # Get absolute paths to avoid edge cases where format file is in the target directory
    abs_format_path = os.path.abspath(args.format)
    target_dir = os.path.abspath(args.directory)

    # Process files
    success_count = 0
    for filename in os.listdir(target_dir):
        file_path = os.path.join(target_dir, filename)
        
        # Ensure it's a file, matches extension, and isn't the format file itself
        if (os.path.isfile(file_path) and 
            filename.endswith(args.extension) and 
            os.path.abspath(file_path) != abs_format_path):
            
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    lines = f.readlines()
                
                # Prevent crashing if target file is shorter than N lines
                if len(lines) < n:
                    print(f"Skipping {filename}: File has fewer than {n} lines.")
                    continue
                
                # Remove last N lines and add new content
                new_content = lines[:-n] + format_content
                
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.writelines(new_content)
                
                print(f"Updated: {filename}")
                success_count += 1
                
            except Exception as e:
                print(f"Failed to process {filename}: {e}")

    print(f"\nDone! Successfully updated {success_count} files.")

if __name__ == '__main__':
    batch_replace_ends()
