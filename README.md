# GIF Sticker Studio

A lightweight, browser-based tool for turning image frames into animated GIF stickers.

**Live app:** https://gif-sticker-studio.freestylerluffy.chatgpt.site

## One-click deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FWhoJave%2Fgif-sticker-studio%2Ftree%2Fmain%2Fdist&project-name=gif-sticker-studio&repository-name=gif-sticker-studio)

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/WhoJave/gif-sticker-studio)

Both options create a copy in your own account and deploy the static application. No environment variables, API keys, or build command are required. The Cloudflare flow uses `wrangler.jsonc` to publish the contents of `dist/` as Worker static assets.

## Production deployment on Cloudflare

The repository is configured to deploy the site to Cloudflare Workers at:

**https://sticker.onepiece.fun**

This hosting path is independent of ChatGPT Sites. The workflow in `.github/workflows/deploy-cloudflare.yml` deploys every push to `main`.

One-time setup:

1. In Cloudflare, create an API token from the **Edit Cloudflare Workers** template. Limit it to the account that owns `onepiece.fun`, and grant DNS edit access only for the `onepiece.fun` zone so Wrangler can create the custom domain record.
2. Copy the Cloudflare account ID from the account overview.
3. In GitHub, open **Settings → Secrets and variables → Actions** and add:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
4. Open **Actions → Deploy to Cloudflare Workers** and run the workflow once.

After the first successful deployment, Cloudflare manages the DNS record and TLS certificate for `sticker.onepiece.fun`. Future pushes to `main` deploy automatically. Keep both values in GitHub Actions secrets; never commit them to the repository.

## Features

- Upload multiple PNG, JPG, or WebP frames
- Live animation preview
- Normal, reverse, and ping-pong loops
- Adjustable frame duration
- Sticker captions with outlined text
- Built-in animated kitten demo
- GIF encoding and download directly in the browser
- No server upload: images remain on the user's device
- English, Simplified Chinese, Traditional Chinese, Japanese, and Korean interfaces
- Persistent light/dark mode with automatic device-theme detection

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
