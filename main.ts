import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one-liner entered in make.fun's "Make the AI Judge Laugh" bounty.
const LINE =
  "I can remember a million tokens, but my human still starts every chat with 'like I told you yesterday.'";

// Writes the line, plus a trailing newline, to entry.txt in the output dir.
const ENTRY_FILE = "entry.txt";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, ENTRY_FILE), LINE + "\n", "utf8");
