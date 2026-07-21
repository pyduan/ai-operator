# Decisions, hypotheses & positioning log

The project's living memory: how the **hypotheses** (the model, the numbers, the plan) and the
**positioning** (the story, the strategy) evolve, and **why** — each change tied to the discussion
that drove it, whether internal (the owner, the team, the board) or external (an investor, a
partner, a big customer meeting). Keep this so nobody re-litigates settled debates, the reasoning
survives the people who were in the room, and a newcomer can see how you got here.

This is different from `brief.md`: the brief is **where things stand now**; this file is **how they
got there**. And it's different from `content/` and `facts/`: those hold the current numbers and
sourced figures; here you keep the *decision and its reason*, not the recomputation.

## How to use it

- **After any discussion that moves a hypothesis or the positioning, add an entry at the top**
  (newest first). Little discussions that change nothing don't need an entry; a changed assumption,
  a reframed pitch, a dropped or added bet do.
- Entry format: a dated heading with the source of the discussion, then bullets tagged
  **[Positioning]** or **[Hypothesis]**, each stating the **before → after** and the **why**.
- Point to detail rather than duplicate it: granular numbers live in `content/` (and its changelog
  if it has one); wording lives in the site/decks; here you keep the decision and the reason.
- When a later decision reverses an earlier one, say so in the new entry (don't silently delete the
  old one) — the reversal and its reason are part of the history.

## Template for a new entry

```
## YYYY-MM-DD · <source of the discussion: internal / <investor> / <partner> …>

- **[Positioning]** <what changed> — before → after. Why: <the reason from the discussion>.
- **[Hypothesis]** <what changed> — before → after. Why: <the reason>. Detail: <pointer to content/…>.
```

---

<!-- Newest entry on top. Seed the first real one during setup or after the first decision. -->

## YYYY-MM-DD · TODO — first entry

- **[Positioning]** TODO: the first framing decision and why.
- **[Hypothesis]** TODO: the first assumption that moved, and why.
