const sharp = require('sharp');
const fs = require('fs');

async function findBBoxes() {
  const refPath = 'C:/Users/anik/.gemini/antigravity-ide/brain/004c9f27-1fb8-46c8-aad7-9ed94d4bafd0/.user_uploaded/media_1788597095268.jpg';
  const { data, info } = await sharp(refPath).raw().toBuffer({ resolveWithObject: true });
  const w = info.width, h = info.height;
  
  // Background color of page: warm parchment #F5EFE7 (~ r: 245, g: 239, b: 231)
  // Let's identify pixels that are NOT background (i.e. part of photos)
  // Photo pixels generally have lower R, G, B or different chrominance
  // Let's scan row by row between y=200 and y=800 to find the exact bounding boxes
  
  // Let's inspect horizontal projections
  const isPhoto = (x, y) => {
    const idx = (y * w + x) * 3;
    const r = data[idx], g = data[idx+1], b = data[idx+2];
    // Parchment background is r in [235, 255], g in [230, 250], b in [220, 245]
    // Distance from parchment (245, 239, 231)
    const dist = Math.sqrt((r - 245)**2 + (g - 239)**2 + (b - 231)**2);
    return dist > 20;
  };

  // Find vertical segments of rows:
  const rowActivity = [];
  for (let y = 200; y < 800; y++) {
    let count = 0;
    for (let x = 15; x < w - 15; x++) {
      if (isPhoto(x, y)) count++;
    }
    rowActivity.push({ y, count });
  }

  // Find rows where count > 100
  let inRow = false, rows = [], rStart = 0;
  for (const { y, count } of rowActivity) {
    if (count > 150 && !inRow) {
      inRow = true;
      rStart = y;
    } else if (count <= 150 && inRow) {
      inRow = false;
      rows.push({ top: rStart, bottom: y - 1, height: y - rStart });
    }
  }
  if (inRow) rows.push({ top: rStart, bottom: 799, height: 800 - rStart });
  console.log('Detected Photo Rows:', rows);

  // For each row, find columns:
  for (let ri = 0; ri < rows.length; ri++) {
    const r = rows[ri];
    const midY = Math.round((r.top + r.bottom) / 2);
    let inCol = false, cols = [], cStart = 0;
    for (let x = 15; x < w - 15; x++) {
      let colCount = 0;
      for (let y = r.top + 5; y < r.bottom - 5; y++) {
        if (isPhoto(x, y)) colCount++;
      }
      const isColActive = colCount > (r.height - 10) * 0.7;
      if (isColActive && !inCol) {
        inCol = true;
        cStart = x;
      } else if (!isColActive && inCol) {
        inCol = false;
        cols.push({ left: cStart, right: x - 1, width: x - cStart });
      }
    }
    if (inCol) cols.push({ left: cStart, right: w - 16, width: w - 15 - cStart });
    console.log(`Row ${ri+1} (y: ${r.top}..${r.bottom}) cols:`, cols);
  }
}

findBBoxes().catch(console.error);
