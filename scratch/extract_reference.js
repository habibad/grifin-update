const sharp = require('sharp');
const fs = require('fs');

async function extractFromReference() {
  const refPath = 'C:/Users/anik/.gemini/antigravity-ide/brain/004c9f27-1fb8-46c8-aad7-9ed94d4bafd0/.user_uploaded/media_1788597095268.jpg';
  const meta = await sharp(refPath).metadata();
  console.log('Reference dimensions:', meta.width, 'x', meta.height);

  const outDir = 'public/images/gallery/reference';
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  // Let's find coordinates of the grid images in media_1788597095268.jpg
  // Image is 483 x 1024
  // Let's extract:
  // 1. Hero sketch illustration (top right of hero)
  // y between ~50 and ~180, x between ~260 and ~480
  await sharp(refPath)
    .extract({ left: 250, top: 50, width: 225, height: 130 })
    .toFile(`${outDir}/hero-sketch.png`);
  console.log('hero-sketch.png saved');

  // Let's measure rows of images in media_1788597095268.jpg:
  // Row 1:
  // Card 1 (large left): left ~ 20, top ~ 222, width ~ 246, height ~ 186
  // Card 2 (top right): left ~ 271, top ~ 222, width ~ 192, height ~ 89
  // Card 3 (bottom right): left ~ 271, top ~ 320, width ~ 192, height ~ 88

  // Row 2 (3 columns):
  // Card 4 (left): left ~ 20, top ~ 418, width ~ 140, height ~ 138
  // Card 5 (center): left ~ 164, top ~ 418, width ~ 130, height ~ 138
  // Card 6 (right): left ~ 298, top ~ 418, width ~ 165, height ~ 138

  // Row 3 (3 columns):
  // Card 7 (left): left ~ 20, top ~ 564, width ~ 140, height ~ 105
  // Card 8 (center): left ~ 164, top ~ 564, width ~ 130, height ~ 105
  // Card 9 (right): left ~ 298, top ~ 564, width ~ 165, height ~ 105

  // Row 4 (3 columns):
  // Card 10 (left): left ~ 20, top ~ 677, width ~ 140, height ~ 95
  // Card 11 (center): left ~ 164, top ~ 677, width ~ 130, height ~ 95
  // Card 12 (right): left ~ 298, top ~ 677, width ~ 165, height ~ 95

  // Let's save each of these and check
}

extractFromReference().catch(console.error);
