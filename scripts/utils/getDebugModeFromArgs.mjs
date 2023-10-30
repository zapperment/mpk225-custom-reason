export function getDebugModeFromArgs() {
  const args = process.argv.slice(2);
  return args.includes("debug");
}
