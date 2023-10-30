import os from "os";

export function getIsMac() {
  const platform = os.platform();

  switch (platform) {
    case "darwin":
      return true;
    case "win32":
      return false;
    default:
      throw new Error(
        `Invalid platform “${platform}” – this script can only be run on a Mac or a Windows machine`,
      );
  }
}
