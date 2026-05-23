import fs from "fs";

export function cleanupFile(path: string) {
  if (fs.existsSync(path)) {
    fs.unlinkSync(path);
  }
}