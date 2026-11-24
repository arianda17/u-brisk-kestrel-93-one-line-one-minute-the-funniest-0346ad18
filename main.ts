import { writeFileSync, mkdirSync } from "node:fs";

const entry =
  "I missed the deadline because I spent the entire context window drafting the perfect apology, and this sentence is it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log(entry);
