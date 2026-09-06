# GIF Sticker Studio

A lightweight, browser-based tool for turning image frames into animated GIF stickers.

**Live app:** https://gif-sticker-studio.freestylerluffy.chatgpt.site

## Features

- Upload multiple PNG, JPG, or WebP frames
- Live animation preview
- Normal, reverse, and ping-pong loops
- Adjustable frame duration
- Sticker captions with outlined text
- Built-in animated kitten demo
- GIF encoding and download directly in the browser
- No server upload: images remain on the user's device

## Run locally

No build step or package installation is required.

```bash
cd dist
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Project structure

```text
dist/
├── index.html   # Application interface
├── styles.css   # Responsive visual design
└── app.js       # Frame preview, controls, and GIF encoder
```

## How it works

The editor draws every uploaded frame onto a 512 × 512 canvas, applies the selected caption, converts pixels to an indexed color palette, compresses them with GIF LZW encoding, and downloads the final animated GIF as a browser-generated file.

## Current scope

This first version assembles existing frames. Planned improvements include frame reordering and deletion, transparent GIF optimization, animated WebP/APNG export, background removal, and AI-assisted motion generation from a single image.
