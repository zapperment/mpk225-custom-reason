import easymidi from "easymidi";
import {
  getDumpFilePath,
  getPortNameFromArgs,
  loadSysExFile,
} from "./utils/index.mjs";

const portName = getPortNameFromArgs();
const output = new easymidi.Output(portName);
const dumpFilePath = getDumpFilePath();
const bytes = loadSysExFile(dumpFilePath);

console.log(`Loaded MIDI dump file ${dumpFilePath}`);

output.send("sysex", bytes);

console.log(`Sent MIDI dump (${bytes.length} bytes)`);
