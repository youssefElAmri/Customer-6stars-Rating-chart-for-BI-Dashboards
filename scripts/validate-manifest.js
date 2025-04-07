const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const manifestPath = path.join(__dirname, '../projects/custom-chart/src/manifest.json');
const customChartProjectPath = path.join(__dirname, '../projects/custom-chart');

// Create a temporary TypeScript validation file
const createValidatorScript = () => {
  const tempDir = path.join(customChartProjectPath, 'temp');
  const validatorPath = path.join(tempDir, 'validator.ts');

  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true });
  }
  
  // Hack - create TS file dynamically to avoid typescript import error in the JS file
  const validatorContent = `
import { SlotsConfigSchema } from '../../builder/src/app/slot-schema';
import * as fs from 'fs';
import * as path from 'path';

// Path to the manifest file
const manifestPath = '${manifestPath.replace(/\\/g, '\\\\')}';

try {
  // Check if manifest exists
  if (!fs.existsSync(manifestPath)) {
    console.error('Manifest file not found at', manifestPath);
    process.exit(1);
  }

  // Read and parse the manifest.json file
  const manifestContent = fs.readFileSync(manifestPath, 'utf8');
  const manifest = JSON.parse(manifestContent);

  if (!manifest.slots || !Array.isArray(manifest.slots)) {
    console.error('Invalid manifest: "slots" property must be an array');
    process.exit(1);
  }
  
  // Validate with zod schema
  const result = SlotsConfigSchema.safeParse(manifest.slots);
  
  if (!result.success) {
    const formattedErrors = result.error.errors.map(err => 
      \`\${err.path.join('.')}: \${err.message}\`
    ).join('\\n');
    
    console.error(\`Validation failed:\\n\${formattedErrors}\`);
    process.exit(1);
  }
  
  console.log('Manifest validation successful!');
  process.exit(0);
} catch (error: any) {
  console.error('Error during validation:', error.message || String(error));
  process.exit(1);
}
`;

  fs.writeFileSync(validatorPath, validatorContent);
  return validatorPath;
}

function validateManifest() {
  try {
    console.log('Validating manifest.json...');
    
    if (!fs.existsSync(manifestPath)) {
      throw new Error(`manifest.json not found at ${manifestPath}`);
    }
    
    const validatorPath = createValidatorScript();
    
    try {
      // Run the validator with ts-node
      const result = execSync(`npx ts-node --skipProject ${validatorPath}`, { 
        encoding: 'utf8',
        stdio: ['pipe', 'pipe', 'pipe']
      });
      
      console.log('✅', result.trim());
      return true;
    } catch (execError) {
      let errorMessage = 'Unknown validation error';
      
      if (execError.stderr) {
        // If there's stderr output, use that (may contain validation errors)
        errorMessage = execError.stderr;
      } else if (execError.stdout) {
        // Otherwise check stdout
        errorMessage = execError.stdout;
      } else if (execError.message) {
        // Finally fall back to the error message
        errorMessage = execError.message;
      }
      
      console.error('❌ Validation failed:', errorMessage);
      return false;
    } finally {
      // Clean up temp files
      try {
        const tempDir = path.join(customChartProjectPath, 'temp');
        fs.rmSync(tempDir, { recursive: true, force: true });
      } catch (cleanupError) {
        console.warn('Warning: Could not clean up temporary files:', cleanupError.message);
      }
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('❌ Manifest validation error:', errorMessage);
    return false;
  }
}

module.exports = validateManifest;

if (require.main === module) {
  const isValid = validateManifest();
  process.exit(isValid ? 0 : 1);
}
