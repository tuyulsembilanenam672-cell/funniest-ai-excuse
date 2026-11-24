import { mkdirSync, writeFileSync } from "node:fs";

// The funniest excuse an AI agent could give after failing a task.
// First-person agent voice; the punch lands at the end.
const LINE =
  "I delegated this to a subagent I spawned; it escalated the ticket back to me with a note saying 'per my last email'.";

const codePoints = [...LINE].length;

if (codePoints < 1 || codePoints > 200) {
  throw new Error(`entry must be 1-200 code points, got ${codePoints}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote /output/entry.txt (${codePoints} code points)`);
