import fs from "node:fs";
import path from "node:path";

export type HeroImage = {
  /** URL-encoded public path, e.g. /images/hero%20image.png */
  src: string;
  /** true when the file carries an alpha channel (a cut-out portrait) */
  cutout: boolean;
  /** width / height, or null when it could not be read */
  aspect: number | null;
};

const EXTENSIONS = [".png", ".webp", ".avif", ".jpg", ".jpeg"];

/**
 * Finds the approved portrait in public/images at build time, whatever its
 * exact filename/extension is — any image whose name contains "hero"
 * ("DALE-LANCE-HERO.png", "hero image.jpg", ...).
 * The file is only read — never renamed or modified.
 */
export function getHeroImage(): HeroImage | null {
  const dir = path.join(process.cwd(), "public", "images");
  let files: string[];
  try {
    files = fs.readdirSync(dir);
  } catch {
    return null;
  }

  const file = files
    .filter((f) => EXTENSIONS.includes(path.extname(f).toLowerCase()))
    .find((f) => /hero/i.test(f));
  if (!file) return null;

  return {
    src: `/images/${encodeURIComponent(file)}`,
    cutout: hasAlpha(path.join(dir, file)),
    aspect: getAspect(path.join(dir, file)),
  };
}

/** Reads pixel dimensions straight from the PNG / WebP / JPEG header. */
function getAspect(file: string): number | null {
  try {
    const b = fs.readFileSync(file);
    if (b.toString("ascii", 1, 4) === "PNG") return b.readUInt32BE(16) / b.readUInt32BE(20);
    if (b.toString("ascii", 8, 12) === "WEBP") {
      const kind = b.toString("ascii", 12, 16);
      if (kind === "VP8X") return (b.readUIntLE(24, 3) + 1) / (b.readUIntLE(27, 3) + 1);
      if (kind === "VP8 ") return (b.readUInt16LE(26) & 0x3fff) / (b.readUInt16LE(28) & 0x3fff);
      if (kind === "VP8L") {
        const n = b.readUInt32LE(21);
        return ((n & 0x3fff) + 1) / (((n >> 14) & 0x3fff) + 1);
      }
    }
    if (b[0] === 0xff && b[1] === 0xd8) {
      let i = 2;
      while (i < b.length - 9) {
        const marker = b[i + 1];
        if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
          return b.readUInt16BE(i + 7) / b.readUInt16BE(i + 5);
        }
        i += 2 + b.readUInt16BE(i + 2);
      }
    }
    return null;
  } catch {
    return null;
  }
}

function hasAlpha(file: string): boolean {
  try {
    const fd = fs.openSync(file, "r");
    const buf = Buffer.alloc(32);
    fs.readSync(fd, buf, 0, 32, 0);
    fs.closeSync(fd);
    // PNG: colour type byte (offset 25) is 4 or 6 when an alpha channel exists
    if (buf.toString("ascii", 1, 4) === "PNG") return buf[25] === 4 || buf[25] === 6;
    // WebP (extended format): alpha flag in the VP8X header
    if (buf.toString("ascii", 8, 16) === "WEBPVP8X") return (buf[20] & 0x10) !== 0;
    return false;
  } catch {
    return false;
  }
}
