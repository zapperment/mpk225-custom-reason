import easymidi from "easymidi";
import { convertSysExToString } from "./convertSysExToString.mjs";

const sysexHeader = "F0 47 00 23 10 0C 0B";
const timeOut = 3000;

export function listenForDumpInput(portName) {
  const input = new easymidi.Input(portName);
  let timeOutHandle = null;
  let data = [];
  return new Promise((resolve) => {
    input.on("sysex", ({ bytes }) => {
      const hexString = convertSysExToString(bytes);
      if (!hexString.startsWith(sysexHeader)) {
        return;
      }
      data = data.concat(bytes);
      if (!timeOutHandle) {
        timeOutHandle = setTimeout(() => {
          input.close();
          resolve(data);
        }, timeOut);
      }
    });
  });
}
