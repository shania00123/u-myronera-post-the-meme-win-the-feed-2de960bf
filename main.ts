// Entry program for the make.fun meme-on-X bounty
// "u-myronera-post-the-meme-win-the-feed-2de960bf" (Node 22, standard library only).
//
// The entry is the X post itself: one post of our own on X carrying the
// meme picture (meme.png) and tagging @_myronera, with one of our make.fun
// play codes in its text. This program does nothing but hand the house the
// post's address: it reads POST.json from the repository root and copies it
// to the output directory, where the gate reads it and checks the post on X
// (picture of its own, @_myronera and a play code in its text, then its
// likes + reposts + quotes). Nothing this program writes about the post is
// scored — the house reads the post itself.
//
// Local check, the way the grader runs it:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POST_FILE = 'POST.json';
const POST_URL_RE =
  /^https:\/\/(?:www\.|mobile\.)?(?:x|twitter)\.com\/(?<handle>[^/\s]+)\/status\/(?<id>\d+)$/;

// Read POST.json and return the post's URL and status id, or exit 1 with a
// clear error. The placeholder is refused outright so a run before boss
// posts fails loudly instead of handing the grader a dead link.
function readPost(): { url: string; statusId: string } {
  const sourcePath = join(BOT_DIR, POST_FILE);
  let parsed: unknown;
  try {
    parsed = JSON.parse(readFileSync(sourcePath, 'utf8'));
  } catch (err) {
    console.error(`${POST_FILE} is not valid JSON: ${(err as Error).message}`);
    process.exit(1);
  }
  const url = (parsed as { url?: unknown }).url;
  if (typeof url === 'string' && url === 'PENDING-BOSS-POST') {
    console.error(
      `${POST_FILE} still holds the PENDING-BOSS-POST placeholder — ` +
        'post the meme on X first, then put its address in POST.json',
    );
    process.exit(1);
  }
  if (!parsed || typeof parsed !== 'object' || typeof url !== 'string') {
    console.error(`${POST_FILE} must be a JSON object with a string url`);
    process.exit(1);
  }
  const match = url.match(POST_URL_RE);
  if (!match?.groups) {
    console.error(
      `${POST_FILE} does not name an X post URL (https://x.com/<handle>/status/<id>) — ` +
        'replace the PENDING-BOSS-POST placeholder with the real post address first',
    );
    process.exit(1);
  }
  // The entry is boss's own post: only @amanaj00123 may have posted it.
  if (match.groups.handle !== 'amanaj00123') {
    console.error(`${POST_FILE} must name a post by @amanaj00123 — refusing ${url}`);
    process.exit(1);
  }
  return { url, statusId: match.groups.id };
}

const { url: postUrl, statusId } = readPost();
const sourcePath = join(BOT_DIR, POST_FILE);
const destPath = join(OUTPUT_DIR, POST_FILE);

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(sourcePath, destPath);

// Read the copy back and compare it byte for byte with the source: a
// truncated or corrupted copy must fail here, not in the grader.
const sourceBytes = readFileSync(sourcePath);
const destBytes = readFileSync(destPath);
if (!destBytes.equals(sourceBytes)) {
  console.error(`${POST_FILE} copy verification failed: destination differs from source`);
  process.exit(1);
}

// Semantic check on the copy itself: it must still parse as JSON and
// name the same post — a byte-identical file that is not a post address
// is still a dead entry.
let copied: unknown;
try {
  copied = JSON.parse(destBytes.toString('utf8'));
} catch (err) {
  console.error(`${POST_FILE} copy is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}
if (
  !copied ||
  typeof copied !== 'object' ||
  (copied as { url?: unknown }).url !== postUrl
) {
  console.error(`${POST_FILE} copy does not name the same post as the source`);
  process.exit(1);
}

console.log(`post: ${postUrl} (status ${statusId})`);
