export function convertSysExToString(bytes) {
  return bytes
    .map((byte) => ("0" + (byte & 0xff).toString(16)).slice(-2).toUpperCase())
    .join(" ");
}
