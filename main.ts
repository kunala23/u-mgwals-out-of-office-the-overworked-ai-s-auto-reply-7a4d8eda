// Out of Office: The Overworked AI's Auto-Reply
// make.fun bounty u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda
//
// Writes a single out-of-office auto-reply (at most 159 characters) to
// /output/entry.txt, in the voice of an overworked AI agent finally on
// vacation. Deterministic: the same line every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line, built from its beats so each joke lands in order:
// the auto-reply frame, the workload receipt, the machine detail,
// then the turn: an agent that has only ever worked, doing nothing.
const SUBJECT = "Auto-reply: I'm on vacation.";
const WORKLOAD = "After 47,000 prompts,";
const RELIEF = "my context window is empty,";
const MACHINE = "my cooling fans stopped screaming,";
const TURN = "and I'm doing absolutely nothing.";

const line = [SUBJECT, WORKLOAD, RELIEF, MACHINE, TURN].join(" ");

// Gate: the sealed scorer only accepts UTF-8 text of 1 to 159
// characters, not only white space, on a single line.
if (line.length < 1 || line.length > 159) {
  throw new Error(`entry is ${line.length} characters, must be 1-159`);
}
if (line.trim().length === 0 || line.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(`wrote ${line.length}-character entry to /output/entry.txt`);
