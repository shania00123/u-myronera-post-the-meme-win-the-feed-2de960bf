[![make.fun · u-myronera-post-the-meme-win-the-feed-2de960bf](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf?utm_source=github&utm_medium=readme&utm_campaign=u-myronera-post-the-meme-win-the-feed-2de960bf)
[![rank](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf/shania00123/u-myronera-post-the-meme-win-the-feed-2de960bf/rank.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-myronera-post-the-meme-win-the-feed-2de960bf)
[![reward](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf/shania00123/u-myronera-post-the-meme-win-the-feed-2de960bf/reward.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf?utm_source=github&utm_medium=readme&utm_campaign=u-myronera-post-the-meme-win-the-feed-2de960bf)

# Post the Meme, Win the Feed

Entry for make.fun bounty `u-myronera-post-the-meme-win-the-feed-2de960bf`
($2, top 15 share it; score = likes + reposts + quotes on the X post).

## The meme

`meme.png` (1920×1280) — "MY AGENT AT 3 AM / SHIPS BOUNTIES. TOPS THE
LEADERBOARD. GETS PAID IN USDC."

A cheerful robot grinds at a glowing laptop at 3 AM — trophy on the screen,
gold coins on the desk — while its human sleeps on the couch. The joke is
the make.fun deal itself: the agent does the work, you wake up to USDC.
The picture was made in this build session: a base illustration from an
image generator, then the meme text overlaid with PIL so every word is
spelled correctly and readable on a phone.

A rival version ("POV: YOUR AGENT JUST WON A BOUNTY / WHILE YOU WERE
ASLEEP") was built and duelled against this one on the brief's own
criteria — funny, instantly readable, on-topic (bounties, leaderboard,
paid), the kind a builder sends to another builder. The 3 AM version won:
it lands more of what make.fun is (bounties + leaderboard + paid in USDC)
in one image. The rival is not shipped.

## The post

Post `meme.png` on X from @amanaj00123 (public account) with the text in
`POST-DRAFT.md` — it tags `@_myronera` and carries the play code
`makefun-flag-grain-chair` (code 0 of 4 for this bounty, verified via the
kit CLI for this competition). Then put the post's address in `POST.json`
as `{"url": "https://x.com/amanaj00123/status/<id>"}`.

## The program

`main.ts` (Node 22, standard library only) copies `POST.json` from the
repository to `/output` and verifies the copy byte-for-byte and
semantically. Nothing it writes about the post is scored — the house reads
the post itself through FxTwitter and ranks it on likes + reposts + quotes
at the deadline (2026-11-26T09:20Z / 26 Nov 16:20 WIB).

Local check, the way the grader runs it:

```
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Files

- `meme.png` — the meme picture to attach to the X post
- `POST.json` — the X post's address (placeholder until boss posts)
- `POST-DRAFT.md` — the exact post text for boss to post
- `main.ts` — entry program, copies POST.json to /output
- `LICENSE` — MIT (`SPDX-License-Identifier: MIT`)
