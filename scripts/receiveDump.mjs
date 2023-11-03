import {
  getDumpFilePath,
  getPortNameFromArgs,
  listenForDumpInput,
  writeSysExFile,
} from "./utils/index.mjs";

const portName = getPortNameFromArgs();

console.log(
  "Waiting for system exclusive dump – on the MPK225, go to Global > SysEx to send one!",
);

const bytes = await listenForDumpInput(portName);

console.log(`Received MIDI dump (${bytes.length} bytes)`);

const dumpFilePath = getDumpFilePath();

writeSysExFile(bytes, dumpFilePath);

console.log(`Wrote system exclusive data to local file ${dumpFilePath}`);
