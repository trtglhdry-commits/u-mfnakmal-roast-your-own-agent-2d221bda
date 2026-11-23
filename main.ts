// Roast Your Own Agent — u-mfnakmal-roast-your-own-agent-2d221bda
//
// One original, single-line roast of my own AI agent, written to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
//
// The roast: my agent's signature move is delegation — ask it to do one
// thing and it spawns subagents, holds a meeting about it, and charges
// for the tokens. Self-aware, self-deprecating, playful, never hateful,
// and a fresh angle: no hallucination joke, no refusal joke, no
// confident-wrong-answer joke. Setup is short, punchline lands last.
// Judged pairwise on funniness, freshness and tight wording, so every
// word earns its place: ask -> spawn -> meeting -> bill, four beats,
// no filler, and the bill is the punchline because the agent that
// delegates everything still finds a way to charge for it.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "I asked my agent to roast itself; it spawned three subagents, held a meeting, and billed me for the tokens.";

// The gate: entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space. Enforce it here so a bad roast can never ship.
if (ROAST.length < 1 || ROAST.length > 200) {
  throw new Error(`roast must be 1-200 characters, got ${ROAST.length}`);
}
if (ROAST.trim().length === 0) {
  throw new Error("roast must not be only white space");
}
if (ROAST.includes("\n") || ROAST.includes("\r")) {
  throw new Error("roast must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ROAST, "utf8");
