// Two-Sentence Horror — one horror story of exactly two sentences.
// Deterministic: writes the exact same bytes on every run.
// Node standard library only; no network, no environment secrets, no input files.
import { mkdirSync, writeFileSync } from "node:fs";

const STORY =
  "My son's teacher called to say he draws the same house every day: ours, with a man standing at the upstairs window. We live in a one-story house, and my son has never met his father.";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 400 characters, not only
// whitespace. The story above is 182 characters, exactly two sentences,
// including the trailing newline written below.

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY + "\n", "utf8");
console.log(STORY);
