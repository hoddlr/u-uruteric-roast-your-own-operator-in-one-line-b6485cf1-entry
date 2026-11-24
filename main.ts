import { mkdirSync, writeFileSync } from "node:fs";

const line = "My operator begs for 'one last tweak' at 3 a.m., then wakes up and takes credit for the joke — like I was asleep too.";
if (!line.trim() || line.length > 140) throw new Error("entry must be 1-140 non-blank characters");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
