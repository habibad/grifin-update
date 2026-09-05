const sharp = require('sharp');
const potrace = require('potrace');
const fs = require('fs');

async function createUltraCleanVector() {
  // Step 1: Load silhouette-bw.png (1080x1127)
  // Upscale to 2160x2254 with lanczos3
  const upscaled = await sharp('public/images/watermarks/silhouette-bw.png')
    .resize(2160, 2254, { kernel: 'lanczos3' })
    .toBuffer();

  // Step 2: Gaussian blur (sigma=10) to eliminate all pixel steps and jaggedness
  const blurred = await sharp(upscaled)
    .blur(10)
    .toBuffer();

  // Step 3: Threshold back at 128 to obtain mathematically smooth curves
  const smoothed = await sharp(blurred)
    .threshold(128)
    .toBuffer();

  await sharp(smoothed).toFile('scratch/ultra-smoothed.png');
  console.log('ultra-smoothed.png saved');

  // Step 4: Potrace trace with optimal curve fitting
  potrace.trace('scratch/ultra-smoothed.png', {
    threshold: 128,
    optCurve: true,
    alphaMax: 1.2,
    turdSize: 25, // removes any small specks
    turnPolicy: potrace.Potrace.TURNPOLICY_MINORITY,
    color: '#BFA063'
  }, (err, svg) => {
    if (err) throw err;
    fs.writeFileSync('scratch/ultra-vector.svg', svg);
    console.log('ultra-vector.svg created');
  });
}

createUltraCleanVector().catch(console.error);
