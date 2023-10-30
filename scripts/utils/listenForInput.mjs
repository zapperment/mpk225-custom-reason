import easymidi from "easymidi";

const sysexHeader = "F0 00 20 29 02 0A 01";

export function listenForInput(portName) {
  const input = new easymidi.Input(portName);
  input.on("sysex", ({ bytes }) => {
    const hexString = bytes
      .map((byte) => ("0" + (byte & 0xff).toString(16)).slice(-2).toUpperCase())
      .join(" ");
    if (!hexString.startsWith(sysexHeader)) {
      return;
    }
    const message = String.fromCharCode(...bytes.slice(7, -1));
    console.log(message);
  });
}
