const fs = require('fs');
const path = require('path');
const archiver = require('archiver');
const validateManifest = require('./validate-manifest');

const rootDir = path.resolve(__dirname, '..');
const buildOutputDir = path.join(rootDir, 'custom-chart-build-output');
const outputZipPath = path.join(buildOutputDir, 'bundle.zip');

function createArchive() {
  return new Promise((resolve, reject) => {
    console.log('Creating ZIP archive...');

    const output = fs.createWriteStream(outputZipPath);
    const archive = archiver('zip', {
      zlib: { level: 9 } // Maximum compression level
    });

    output.on('close', function() {
      console.log(`✅ Archive created successfully: ${outputZipPath}`);
      console.log(`📦 Total size: ${(archive.pointer() / 1024).toFixed(2)} KB`);
      resolve();
    });

    archive.on('warning', function(err) {
      if (err.code === 'ENOENT') {
        console.warn('Warning:', err);
      } else {
        reject(err);
      }
    });

    archive.on('error', function(err) {
      console.error('❌ Archive creation failed:', err.message);
      reject(err);
    });

    archive.pipe(output);

    archive.directory(buildOutputDir, false);

    archive.finalize();
  });
}

async function main() {
  console.log('Starting bundle archive process...');

  try {
    if (!fs.existsSync(buildOutputDir)) {
      console.error(`❌ Build output directory not found: ${buildOutputDir}`);
      console.log('Please run the build command first');
      process.exit(1);
    }

    const isValid = validateManifest();
    
    if (isValid) {
      await createArchive();
      console.log('✅ Bundle archive process completed successfully');
    } else {
      console.error('❌ Bundle archive creation aborted due to validation failure');
      process.exit(1);
    }
  } catch (error) {
    console.error('❌ Bundle archive creation aborted:', error.message);
    process.exit(1);
  }
}

main();
