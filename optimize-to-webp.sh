#!/bin/bash

SOURCE_DIR="/Users/alekseigakh/Downloads/yourdc-images"
TARGET_DIR="/Users/alekseigakh/Desktop/Projects/YOURDC/public/images"

# Create target directory
mkdir -p "$TARGET_DIR"

echo "Converting images to WebP with optimization..."

# Process all PNG files
cd "$SOURCE_DIR"
for file in *.png; do
  if [ -f "$file" ]; then
    num="${file%.png}"
    echo "Processing ${file} -> ${num}.webp..."

    # Resize based on image type
    case "$num" in
      001|002|006|007|008|010|012)
        # Landscape 3:2 - resize to 1800 width
        sips -s format png --resampleWidth 1800 "$file" --out "/tmp/${num}_resized.png" >/dev/null 2>&1
        ;;
      003|005|009)
        # Portrait 2:3 - resize to 1200 width
        sips -s format png --resampleWidth 1200 "$file" --out "/tmp/${num}_resized.png" >/dev/null 2>&1
        ;;
      004|011)
        # Square 1:1 - resize to 1200x1200
        sips -s format png --resampleWidth 1200 "$file" --out "/tmp/${num}_resized.png" >/dev/null 2>&1
        ;;
    esac

    # Convert to WebP with quality 85
    /opt/homebrew/bin/cwebp -q 85 "/tmp/${num}_resized.png" -o "$TARGET_DIR/${num}.webp" 2>&1 | grep -v "^Saving"

    # Cleanup temp file
    rm -f "/tmp/${num}_resized.png"
  fi
done

echo ""
echo "Done! WebP images saved to $TARGET_DIR"
echo ""
ls -lh "$TARGET_DIR"/*.webp
echo ""
echo "Total size:"
du -sh "$TARGET_DIR"
