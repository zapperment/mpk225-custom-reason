import fs from "fs";

export function loadSysExFile(inputPath) {
  const buffer = fs.readFileSync(inputPath);
  return Array.from(buffer);
}
