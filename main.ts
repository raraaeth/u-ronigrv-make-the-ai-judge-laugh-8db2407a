import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one-liner entered in make.fun's "Make the AI Judge Laugh" bounty.
const LINE =
  "I can remember a million tokens, but my human still starts every chat with 'like I told you yesterday.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
