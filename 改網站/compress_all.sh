#!/bin/bash

# Batch Compression Script for DTW_website
# Settings based on /media-compression workflow

mkdir -p compressed

for f in *.mp4; do
    # Skip if no mp4 files found
    [ -e "$f" ] || continue
    
    echo "------------------------------------------------"
    echo "Processing: $f"
    
    output="compressed/$f"
    
    # Run ffmpeg with CRF 28 and faster preset
    # Keeping audio as per default decision
    ffmpeg -i "$f" -vcodec libx264 -crf 28 -preset faster "$output" -y
    
    orig_size=$(stat -f%z "$f")
    new_size=$(stat -f%z "$output")
    reduction=$(( (orig_size - new_size) * 100 / orig_size ))
    
    echo "Done: $f"
    echo "Original Size: $((orig_size / 1024 / 1024)) MB"
    echo "Compressed Size: $((new_size / 1024 / 1024)) MB"
    echo "Reduction: $reduction%"
done

echo "------------------------------------------------"
echo "All files processed. Check the 'compressed' folder."
