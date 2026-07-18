# Brand assets

Originals live here at full resolution: logos, photos, scans, source files (SVG, layered files, hi-res JPG/PNG/TIFF). This folder is the archive; the site never serves directly from it.

- Web copies: when an image goes on the site, place a processed copy in `site/src/assets/` (raster, so Astro optimizes it) or `site/public/` (SVG). Processing means: EXIF stripped, correctly oriented, resized to at most ~2000px on the long edge. The rules live in `source/formats/website.md`.
- Keep filenames descriptive (`portrait-anna-2026.jpg`, wordmark, icon), organized in subfolders if the count grows.
- Very large collections of originals (hundreds of scans) can outgrow git comfort; if that happens, discuss moving originals to cloud storage and keeping only web copies in the repo.
