const sharp = require('sharp');

async function cleanSketch() {
  const input = 'public/images/gallery/reference/hero-sketch.png';
  const { data, info } = await sharp(input).raw().toBuffer({ resolveWithObject: true });
  const w = info.width, h = info.height;

  // Let's replace any dark pixels in x < 35 with parchment color (r: 246, g: 239, b: 230)
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < 35; x++) {
      const idx = (y * w + x) * info.channels;
      data[idx] = 246;
      data[idx+1] = 239;
      data[idx+2] = 230;
      if (info.channels === 4) data[idx+3] = 255;
    }
  }

  await sharp(data, { raw: { width: w, height: h, channels: info.channels } })
    .png()
    .toFile('public/images/gallery/reference/hero-sketch-clean.png');
  console.log('hero-sketch-clean.png saved');
}

cleanSketch().catch(console.error);
