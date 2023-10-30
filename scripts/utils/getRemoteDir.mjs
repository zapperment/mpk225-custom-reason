export function getRemoteDir(isMac) {
  return isMac
    ? `/Users/${process.env.USER}/Library/Application Support/Propellerhead Software/Remote`
    : "C:/ProgramData/Propellerhead Software/Remote";
}
