# Coolify deployment

Use the default `Dockerfile`. It serves the included, pre-built `dist/` directory and does not require Node.js or `src/` during the Coolify build.

In Coolify, set the repository **Base Directory** to `/` and the **Dockerfile location** to `/Dockerfile`. Do not upload the ZIP as a single file to GitHub: extract it first, then upload the folders and files inside it so `dist/`, `Dockerfile`, and `nginx.conf` are at the repository root.

Use container port `80`. Let Coolify provide HTTPS; do not add certificates to the container.

`Dockerfile.source` is retained for source-only environments that want to generate `dist/` during the container build.
