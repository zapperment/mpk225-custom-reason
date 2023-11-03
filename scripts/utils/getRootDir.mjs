import url from "url";
import path from "path";

export function getRootDir() {
  const currentDir = url.fileURLToPath(import.meta.url);
  return path.dirname(path.dirname(path.dirname(currentDir)));
}
