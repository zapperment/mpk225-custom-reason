import {
  convertSysExToString,
  getDumpFilePath,
  loadSysExFile,
} from "./utils/index.mjs";

const dumpFilePath = getDumpFilePath();
const bytes = loadSysExFile(dumpFilePath);
console.log(`Contents of MIDI sysex dump file ${dumpFilePath}:`);
console.log(convertSysExToString(bytes));
