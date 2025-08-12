import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';

const sizes = [320, 640, 1280];
const imageDir = path.join(process.cwd(), 'assets', 'images');
const supported = new Set(['.jpg', '.jpeg', '.png']);

async function processDirectory(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory()) {
      await processDirectory(path.join(dir, entry.name));
      continue;
    }

    const ext = path.extname(entry.name).toLowerCase();
    if (!supported.has(ext)) continue;

    const filePath = path.join(dir, entry.name);
    const baseName = path.basename(entry.name, ext);

    for (const width of sizes) {
      const resizeOptions = { width, withoutEnlargement: true };
      const outBase = path.join(dir, `${baseName}-${width}`);
      await sharp(filePath).resize(resizeOptions).toFile(`${outBase}${ext}`);
      await sharp(filePath).resize(resizeOptions).toFormat('webp').toFile(`${outBase}.webp`);
      await sharp(filePath).resize(resizeOptions).toFormat('avif').toFile(`${outBase}.avif`);
    }
  }
}

processDirectory(imageDir).catch((err) => {
  console.error(err);
  process.exit(1);
});

