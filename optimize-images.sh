#!/bin/bash

SOURCE_DIR="/Users/alekseigakh/Downloads/yourdc-images"
TARGET_DIR="/Users/alekseigakh/Desktop/Projects/YOURDC/public/images"

# Create target directory
mkdir -p "$TARGET_DIR"

echo "Optimizing images..."

# Landscape images 3:2 (resize to 1800x1200)
for num in 001 002 006 007 008 010 012; do
  if [ -f "$SOURCE_DIR/${num}.png" ]; then
    echo "Processing ${num}.png (landscape 3:2)..."
    sips -s format jpeg -s formatOptions 85 --resampleWidth 1800 "$SOURCE_DIR/${num}.png" --out "$TARGET_DIR/${num}.jpg"
  fi
done

# Portrait images 2:3 (resize to 1200x1800)
for num in 003 005 009; do
  if [ -f "$SOURCE_DIR/${num}.png" ]; then
    echo "Processing ${num}.png (portrait 2:3)..."
    sips -s format jpeg -s formatOptions 85 --resampleWidth 1200 "$SOURCE_DIR/${num}.png" --out "$TARGET_DIR/${num}.jpg"
  fi
done

# Square images 1:1 (resize to 1200x1200)
for num in 004 011; do
  if [ -f "$SOURCE_DIR/${num}.png" ]; then
    echo "Processing ${num}.png (square 1:1)..."
    sips -s format jpeg -s formatOptions 85 --resampleWidth 1200 "$SOURCE_DIR/${num}.png" --out "$TARGET_DIR/${num}.jpg"
  fi
done

echo "Done! Images optimized and saved to $TARGET_DIR"
ls -lh "$TARGET_DIR"
