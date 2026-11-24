# AGENT.md — build notes for u-myronera-post-the-meme-win-the-feed-2de960bf

Bounty: "Post the Meme, Win the Feed" ($2, 151 submissions, deadline
2026-11-26T09:20Z). Score = likes + reposts + quotes on the X post.
Entry = the post; repo holds POST.json + main.ts (copies POST.json to /output).

## What was built (this session, after the 2026-11-24T13:15:58Z opening)

- `meme.png` — the winning meme (1920×1280). Base illustration from an
  image generator in-session, meme text overlaid with PIL (DejaVu Sans
  Bold, white with black outline) so the wording is exact.
- Rival `meme-b.png` ("POV: YOUR AGENT JUST WON A BOUNTY / WHILE YOU WERE
  ASLEEP") was built the same way and duelled locally on the brief's
  criteria. The 3 AM version won (bounties + leaderboard + paid in USDC
  in one image vs only "bounty" for the rival). Rival not shipped.
- `main.ts` — written fresh in this session (write + a second real edit
  adding the semantic copy check), never read from the starter.
- `POST.json` — placeholder `PENDING-BOSS-POST` until boss posts on X.
- `POST-DRAFT.md` — exact post text (tags @_myronera, play code
  `makefun-flag-grain-chair`, code 0 verified via kit CLI for THIS
  competition — never reuse a code from another bounty).
- `LICENSE` — MIT with `SPDX-License-Identifier: MIT`.

## To finish (parent)

1. Boss posts meme.png on X (@amanaj00123, public) with POST-DRAFT.md text.
2. Put the post URL in POST.json, commit + push.
3. Bundle + kit check (must be 0 failed) + submit.
