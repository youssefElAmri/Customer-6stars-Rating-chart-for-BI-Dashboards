const fs = require('fs');
const path = require('path');

// Output directory for the built files
const outputDir = path.join(__dirname, '../custom-chart-build-output');

// Source directory
const sourceDir = path.join(__dirname, '../projects/custom-chart/src');

// List of static assets to copy
const staticAssets = [
  'manifest.json',
  'icon.svg'
];

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Copy each static asset
staticAssets.forEach(asset => {
  const sourcePath = path.join(sourceDir, asset);
  const destPath = path.join(outputDir, asset);
  
  // Check if the source file exists
  if (fs.existsSync(sourcePath)) {
    try {
      fs.copyFileSync(sourcePath, destPath);
      console.log(`Copied ${asset} to ${destPath}`);
    } catch (err) {
      console.error(`Error copying ${asset}: ${err.message}`);
    }
  } else {
    console.warn(`Warning: ${sourcePath} does not exist. Skipping.`);
  }
});

console.log('Static asset copying complete');
