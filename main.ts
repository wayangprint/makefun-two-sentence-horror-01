// Two-Sentence Horror — one horror story of exactly two sentences.
// Deterministic: writes the exact same bytes on every run.
// Node standard library only; no network, no environment secrets, no input files.
import { mkdirSync, writeFileSync } from "node:fs";

const STORY =
  "The nursery camera sends me a photo every time it detects motion in the crib. The latest one shows me, asleep in it — and I'm typing this from the kitchen.";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 400 characters, not only
// whitespace. The story above is 155 characters, exactly two sentences,
// including the trailing newline written below.

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY + "\n", "utf8");
console.log(STORY);
