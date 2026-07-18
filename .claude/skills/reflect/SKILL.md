---
name: reflect
description: "End-of-session reflection: fold new preferences, corrections, and facts from this session into the guides, prune stale rules, then commit and push. Run before ending any session in which something was learned or changed; the Stop hook enforces it."
---

# Reflect

The step that makes feedback permanent. Review the session and update the source of truth, so the next session (any machine, any AI) starts smarter.

Scan the conversation for:

- **Taste and corrections**: anything the owner corrected, praised, or rejected about words → `source/brand/voice.md`; about looks → `source/brand/design.md` (and `tokens.css` if values changed); about how a format is built → the relevant `source/formats/*.md`. Write rules the way the guides do: short, concrete, with an example when the correction came from a real one.
- **New facts**: about the owner, the project, priorities, decisions taken → `source/brief.md` (update the sections, append dated one-liners to history).
- **Stale rules**: anything in the guides this session contradicted or made obsolete. Prune it; guides must stay lean and current or they rot.
- **Leftovers**: unprocessed inbox files, unpushed work, a `<!-- verify -->` fact that got confirmed.

Then:

1. Make the edits. Small and surgical; don't rewrite guides wholesale.
2. Commit and push everything (per the publish skill).
3. Tell the owner, transparently and briefly, what you saved: "I noted in your voice guide that you prefer X, and updated the brief with Y." If the session produced nothing new, say nothing about reflection and just make sure everything is pushed.
