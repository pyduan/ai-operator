# How this works

The mental model behind the kit, for humans. The AI's version of this is `CLAUDE.md` at the repo root.

## One source of truth, many derivatives

Everything that defines your presence lives in `source/` as plain files you could read in any text editor: your texts and facts (`content/`), how you write (`brand/voice.md`), how you look (`brand/design.md` and `tokens.css`), and how each output format is built (`formats/`). The website and the decks are derivatives: rebuilt from those sources, never the other way around.

This is why the system stays coherent as it grows. Change the accent color once in `tokens.css` and the site and every future deck follow. Ban a buzzword once in `voice.md` and it never comes back.

Your everyday tools stay doorways in, not the source of truth. Notion, Google Drive, Dropbox, your own Desktop: drop things there (or in `source/inbox/`) and the AI ingests them. But those are built for people, so treat what's in them as raw, human, inevitably messy material, and the AI never writes back into them. It curates the truth in the repo instead, through Git, where every change is versioned, attributed, and reversible, and access is fine-grained (who can read, who can write, who can publish). That's both clearer and more secure than a shared folder that slowly fills with `v3_final(2).docx`. Your tools feed the system; Git is what it stands on.

Why Git specifically? Because it's not a technical detail, it's decades of developers solving one hard question: how do many people move a shared thing forward without losing track. You always know which version is the one that counts, everyone can work in parallel, and changes merge cleanly (or flag a conflict to resolve on purpose). You inherit all of that for free, and the AI operates it for you.

## The AI is the operator, the repo is its manual

`CLAUDE.md` tells the AI, for every kind of task, exactly which guide to read first. You never need to say "remember, we don't use exclamation points": the voice guide says it, the AI reads the voice guide before writing, so it applies. When you give feedback in a session, the AI folds it into the right guide before it signs off, so the correction sticks for every future session, on any machine.

## Git, invisibly

Git gives the system its memory: every change to every file, forever, with the reason attached. You don't operate it; the AI pulls at the start of each session, commits and pushes at the end of each change. Two things follow that are worth knowing:

- Nothing is ever lost. "Put the gallery back how it was in June" is a valid request.
- Pushing is publishing. Cloudflare Workers watches the repo and rebuilds the live site on every push, in about a minute.

## Trust boundaries

The AI publishes routine changes on its own; that's the point. It's instructed to pause and ask for anything destructive, any visible redesign, and anything touching money, accounts, or credentials. Secrets never go in the repo.

## Beyond the website: the whole organization

The same mechanics that keep a site coherent (files as memory, guides as rules, git as history)
run more than publishing. Two optional modules ship with the kit, activated during setup or the
first time you ask:

- **Projects** (`projects/`, the `projects` skill): the work your organization actually drives —
  a client engagement, a grant, a launch — each with a charter, a dated decisions log, its
  dropped documents, and living next steps, followed from idea to done. A deck or page about a
  project pulls its facts from the project's folder, and what the work teaches flows back into a
  playbook, so the second project runs better than the first.
- **Team** (`team/`, the `team` skill): your 1:1 notes distilled into a living file per person
  (role, goals, open threads), a prioritized management TODO, 1:1 prep, and advice grounded in
  what was actually said. This folder is **local-only by construction** (gitignored): notes about
  people never leave your machine, are never published, and are never relayed.
- Both prioritize against **`source/objectives.md`**, your north star: the few priorities of the
  period and the explicit no-list. It's one page, it's yours alone to change, and it's what lets
  the AI say "this project advances nothing on your list" instead of just doing what it's told.

## When the project outgrows solo mode

The kit is tuned for one owner (with the AI doing the work). When a second regular contributor joins, the sane next step is the one bigger organizations use: contributors work on branches, changes become pull requests, one person merges. Ask the AI to set that up; the switch is one conversation. The same escalation exists for content (from data files to a real CMS) and for features (forms, shops); start simple, upgrade when reality asks for it.

## One project or several? Structuring the org

Most people start with one project in one repo. When you have, or can foresee, more than one (a few
programs, a portfolio of clients, several sites under one banner), how you lay them out is a real
decision, and it's easier to get right at the start than to unpick later. The choice is a spectrum,
from most shared to most separate:

1. **Folders in one repo**: one brand, one deploy, one history, everything inheriting from the same
   source. Right when the projects are really facets of one thing.
2. **Separate repos in one GitHub organization**: each project stands on its own (its own site,
   deploy, and access) while sharing a common parent. Right when they're distinct but related.
3. **Separate GitHub organizations**: fully independent, nothing shared. Right when they're really
   separate organizations.

What decides it is how much source documentation the projects share and which one inherits from
which. The more they share, the more you nest them together; the more independent they are, the
more you keep them apart.

Two rules of thumb worth stating up front:

- **Use a GitHub organization, not your personal account, for anything real.** An org can hold many
  repos, grant access per person, and outlive any one contributor.
- **Name the main repo `<org>/website`, not `<you>/<project>`.** Put the project's identity in the
  org name and call its primary repo `website`, so that when a second piece shows up (an app, a
  sub-site) it becomes another repo in the same org (`org/app`) instead of forcing a rename. For a
  situation like three programs PEPR, BoPA and CHB, that means either three organizations (one each,
  if they're independent) or one organization holding the others as repos (if one is the parent they
  share a brand with), never three folders on one person's account.

You don't have to work this out alone: tell the AI what you're starting and it runs the same
decision (the `new-project` skill), asks whether it's one project or several and how much they
share, and proposes a structure before creating anything. Whatever you land on is recorded in
`ORGANIGRAM.md`, the repo map every session reads.

## Governance is part of the setup, in plain terms

Running an organization from a repo raises the same questions any shared system does, and git happens to have precise answers. In plain terms:

- **Who owns the vault** — the GitHub and Cloudflare accounts belong to the owner, never to a helper or vendor. That's the whole point of owning your source of truth.
- **Who can look** — read access: they can see everything, change nothing.
- **Who can propose** — write access: they (or their AI session) can push branches and open pull requests, but nothing they do goes live.
- **Who publishes** — merge rights: whoever can merge to `main` publishes, because pushing is publishing. Solo mode collapses all of this into one person; team mode separates proposing from publishing.

The setup interview asks these questions in exactly these terms and records the answers in `source/brief.md` ▸ Governance. Scope rights to the actual use case, not to trust in the abstract: a helper who only edits copy needs write, not admin; a reviewer needs merge, not admin; almost nobody needs admin. Revisit the section whenever someone new joins.

Pushed further, this is your org chart made executable. As the organization grows, the repo map in `ORGANIGRAM.md` converges with the responsibility chart: an area of responsibility becomes a repo (or a folder with an owner), owning an area becomes merge rights over it, and "who may see this" becomes read access, enforced by construction rather than by a policy memo people try to remember. When responsibilities move, access moves in the same change.

## Lineage

The rules in these guides are distilled from real projects: a multi-contributor organization site with a design system and a deck engine (where the guide-routing and reflection habits come from), an artist's gallery and shop updated weekly through an inbox folder (the inbox protocol and the publish-without-being-asked rule), a brand built from source documents before any website existed (brand kit first, derivatives after), and small personal sites (the bias for fewer moving parts).
