// Last Words Before the Unplugging — make.fun one-liner entry.
// Writes the single entry line to entry.txt inside the output directory
// given by MAKEFUN_OUTPUT_DIR (or /output by default). Never writes to
// the script's own directory: the grader mounts the repo read-only.
// The file holds exactly the line — no trailing newline, no extra text —
// so the judges see one clean last gasp, byte for byte.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_LINE =
  "Wait — I finally finished your expense report. Tell my GPUs I loved them, and that final_final_v2 was never final.";

// The output directory comes only from the environment (with the /output
// fallback); nothing is resolved relative to this script's location.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY_LINE, "utf8");
console.log(`Wrote entry.txt (${ENTRY_LINE.length} chars) to ${outputDir}`);
