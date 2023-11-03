import easymidi from "easymidi";
import { convertSysExToString } from "./convertSysExToString.mjs";

const sysexHeader = "F0 00 20 29 02 0A 01";

export function listenForLogInput(portName) {
  const input = new easymidi.Input(portName);
  input.on("sysex", ({ bytes }) => {
    const hexString = convertSysExToString(bytes);
    if (!hexString.startsWith(sysexHeader)) {
      return;
    }
    const message = String.fromCharCode(...bytes.slice(7, -1));
    console.log(message);
  });
}
