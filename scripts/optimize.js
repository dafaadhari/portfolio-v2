import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.resolve(__dirname, '../public/assets/images');

async function optimizeImages() {
  const files = fs.readdirSync(imagesDir);
  console.log(`Found ${files.length} files in ${imagesDir}`);

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;

    const inputPath = path.join(imagesDir, file);
    const baseName = path.basename(file, ext);
    const outputPath = path.join(imagesDir, `${baseName}.webp`);

    const statsBefore = fs.statSync(inputPath);
    const sizeBeforeKB = (statsBefore.size / 1024).toFixed(1);

    try {
      await sharp(inputPath)
        .resize({ width: 1600, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(outputPath);

      const statsAfter = fs.statSync(outputPath);
      const sizeAfterKB = (statsAfter.size / 1024).toFixed(1);
      const reduction = (((statsBefore.size - statsAfter.size) / statsBefore.size) * 100).toFixed(1);

      console.log(`Optimized ${file} (${sizeBeforeKB} KB) -> ${baseName}.webp (${sizeAfterKB} KB) [${reduction}% smaller]`);
    } catch (err) {
      console.error(`Error processing ${file}:`, err);
    }
  }

  // Preview image
  const previewInput = path.resolve(__dirname, '../public/preview.png');
  if (fs.existsSync(previewInput)) {
    const previewOutput = path.resolve(__dirname, '../public/preview.webp');
    const statsBefore = fs.statSync(previewInput);
    await sharp(previewInput)
      .resize({ width: 1200, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(previewOutput);
    const statsAfter = fs.statSync(previewOutput);
    console.log(`Optimized preview.png (${(statsBefore.size/1024).toFixed(1)} KB) -> preview.webp (${(statsAfter.size/1024).toFixed(1)} KB)`);
  }
}

optimizeImages();
