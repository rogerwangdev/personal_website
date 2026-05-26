import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const SRC = path.resolve("..", "pictures");
const DST = path.resolve("public", "images");

const jobs = [
  { in: "myself_fromlinkedin.png", out: "headshot.webp", max: 800 },
  { in: "myself1.jpg",             out: "casual.webp",   max: 1400 },
  { in: "myself_graduation.jpg",   out: "graduation.webp", max: 1600 },
];

await mkdir(DST, { recursive: true });

for (const j of jobs) {
  const srcPath = path.join(SRC, j.in);
  const dstPath = path.join(DST, j.out);
  const info = await sharp(srcPath)
    .rotate() // respect EXIF orientation
    .resize({ width: j.max, height: j.max, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(dstPath);
  console.log(`${j.out}: ${info.width}x${info.height} ${Math.round(info.size / 1024)} KB`);
}
