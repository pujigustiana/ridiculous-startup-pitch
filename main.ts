import { mkdirSync, writeFileSync } from "node:fs";

const pitch =
  "We rent retired lighthouse keepers to read dull sea logs to insomniacs, and sleepless executives pay $30 a night because a stranger droning about tides finally shuts their brains off.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", pitch, "utf8");
