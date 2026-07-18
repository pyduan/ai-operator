---
name: setup
description: "First-time project setup: interview the owner, ingest their content (dropped files or a scrape of their existing site), personalize the brand guides, build v1 of the site, and help put it live. Use when source/brief.md still contains TODO placeholders, or when the owner asks to set up or start their site."
---

# Setup

The founding session. Unlike normal sessions, here you ask questions liberally: everything you learn now becomes guides that every future session runs on. Budget the conversation; batch questions in small, natural groups rather than one long form.

## 1. Interview

Establish, in the owner's own words:

- Who they are and what this site is for (the elevator pitch, the audience, what a visitor should do).
- What pages they imagine (offer a starting set: home, about, work/gallery, contact; fewer is fine).
- Languages, and which is the default.
- The starting point, one of:
  - **an existing live site to replace** (get the URL),
  - **a pile of source documents** (have them drop everything into `source/inbox/`),
  - **nothing yet** (interview a bit deeper and draft for them).
- Taste: sites or brands they admire, colors and fonts they love or hate, photos of their work if relevant. Concrete references beat adjectives.
- Domain: do they own one, where is it registered. (Setup works fine before the domain exists; the site lives on a `.pages.dev` URL meanwhile.)
- Any recurring content: gallery, products, events. These become collections.

## 2. Ingest

**Existing site**: fetch every reachable page of the old site. Save each page's copy as markdown in `source/content/` (one file per page, marked with provenance and date). Download the images worth keeping into `source/brand/assets/`. Record observed design cues (palette, type feel, layout habits) as a starting proposal for the design guide; the owner may want continuity or a clean break, so ask which.

**Inbox**: process per `source/inbox/README.md`. Read everything before filing anything, since documents explain each other.

Facts you couldn't verify get a `<!-- verify -->` marker in the content files.

## 3. Personalize the system

Replace every TODO in these files with what you learned, keeping each file's structure:

- `source/brief.md`, complete and current; it's the first thing every future session reads.
- `source/brand/voice.md`: tone words with meanings, banned words, notation of the project name, languages.
- `source/brand/design.md`: the philosophy paragraph, type choices, imagery style.
- `source/brand/tokens.css`: the real palette and fonts. If using webfonts, self-host them per the design guide.

Read each personalized guide back as a whole; it must read as this project's guide, with no template smell left.

## 4. Build v1

Build the site in `site/` per `source/formats/website.md`: layout shell first (nav, footer, typography on tokens), then pages, then collections if any. Replace the placeholder home page. Run `npm install` and `npm run dev` inside `site/`, verify at mobile and desktop widths, then review it with the owner page by page (share the local URL, show screenshots). Iterate until they're happy; this loop is most of the session.

## 5. Go live

Walk the owner (or their helper) through `docs/deploy-cloudflare.md` while they click. Commit and push everything first so Cloudflare has something to build. Once the `.pages.dev` URL is live, verify it yourself, record the URLs in `brief.md`, and continue to the domain if they own one.

## 6. Close

Run the reflect skill (it will have plenty to record from this session), push everything, and tell the owner what exists now: the live URL, what each folder is for in one line each, and how to work with you from now on (open the folder, run `claude`, talk, drop files in the inbox).
