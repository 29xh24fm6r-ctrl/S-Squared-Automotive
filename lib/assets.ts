import fs from "fs";
import path from "path";

/**
 * Client-supplied photo/logo assets aren't available yet (see README "Assets" section).
 * Components check for the real file at build/render time and fall back to an
 * on-brand placeholder until the client drops the real file into /public/assets/.
 */
export function assetExists(fileName: string): boolean {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", "assets", fileName));
  } catch {
    return false;
  }
}
