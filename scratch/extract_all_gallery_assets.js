const sharp = require('sharp');
const fs = require('fs');

async function extractAll() {
  const refPath = 'C:/Users/anik/.gemini/antigravity-ide/brain/004c9f27-1fb8-46c8-aad7-9ed94d4bafd0/.user_uploaded/media_1788597095268.jpg';
  const outDir = 'public/images/gallery/reference';
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const crops = [
    // Row 1
    { name: 'gallery-01', left: 20, top: 229, width: 245, height: 193 }, // Large corner commercial building
    { name: 'gallery-02', left: 270, top: 229, width: 191, height: 100 }, // Flex building with garage doors at sunset
    { name: 'gallery-03', left: 270, top: 335, width: 191, height: 87 }, // Aerial land parcel

    // Row 2
    { name: 'gallery-04', left: 19, top: 427, width: 141, height: 144 }, // Retail promenade at sunset
    { name: 'gallery-05', left: 163, top: 427, width: 131, height: 144 }, // Wood wall with gold Griffin crest
    { name: 'gallery-06', left: 296, top: 427, width: 165, height: 144 }, // Luxury modern lounge interior

    // Row 3
    { name: 'gallery-07', left: 19, top: 576, width: 141, height: 105 }, // Stone & timber building dusk
    { name: 'gallery-08', left: 163, top: 576, width: 131, height: 105 }, // People & moments social team
    { name: 'gallery-09', left: 296, top: 576, width: 165, height: 105 }, // Strip retail center sunset

    // Row 4
    { name: 'gallery-10', left: 19, top: 685, width: 141, height: 97 }, // Warehouse interior polished concrete
    { name: 'gallery-11', left: 163, top: 685, width: 131, height: 97 }, // High aerial corporate campus
    { name: 'gallery-12', left: 296, top: 685, width: 165, height: 97 }, // Architectural entrance close-up
  ];

  for (const c of crops) {
    // Extract and upscale 3x with Lanczos3 for crispness
    await sharp(refPath)
      .extract({ left: c.left, top: c.top, width: c.width, height: c.height })
      .resize(c.width * 3, c.height * 3, { kernel: 'lanczos3' })
      .jpeg({ quality: 95 })
      .toFile(`${outDir}/${c.name}.jpg`);
    console.log(`Saved ${c.name}.jpg (${c.width * 3}x${c.height * 3})`);
  }

  // Also extract the architectural building sketch in the hero background (y: 60..180, x: 260..480)
  await sharp(refPath)
    .extract({ left: 260, top: 50, width: 220, height: 135 })
    .resize(660, 405, { kernel: 'lanczos3' })
    .png()
    .toFile(`${outDir}/hero-sketch.png`);
  console.log('Saved hero-sketch.png');
}

extractAll().catch(console.error);
