# Content

The canonical texts, facts, and data of the project. If a fact appears on the site or in a deck (a price, a date, a bio line, a claim), it should exist here first. The AI never invents facts; when one is missing, it asks.

## Layout

- One markdown file per topic: `bio.md`, `about.md`, `services.md`, whatever the project needs. These hold the owner's canonical texts and facts, from which page copy is written.
- `collections/` holds structured, frequently updated data as one file per collection, for example `collections/gallery.json` or `collections/products.json`. Pages render these files, so routine updates (a new piece, a price change, marking something sold) are one-line data edits that never touch layout. See the collections section of `source/formats/website.md`.

## Rules

- Update the content file and the page together when a fact changes; the content file is what makes the fact findable next time.
- Keep provenance when it matters: if the owner said it, it's canon; if it came from scraping the old site, mark anything that looked stale with a `<!-- verify -->` comment and ask when it next comes up.
