import fs from "fs";

export function writeSysExFile(bytes, outputPath) {
  const buffer = Buffer.from(bytes);
  fs.writeFileSync(outputPath, buffer);
}
