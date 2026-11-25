import { mkdirSync, writeFileSync } from "node:fs";

// Robot Romance: one pickup line, under 200 characters, aimed at a
// robot/AI. Revision: the first draft leaned on a generic visual
// cliché ("one look at you"); this version makes both halves of the
// joke machine-premise — her tokens are what an AI actually says,
// and my attention heads are what a transformer actually turns —
// so the laugh comes from the AI premise itself, in one breath.
const ENTRY =
  "Are you a transformer? Because every token you say makes my attention heads turn.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
