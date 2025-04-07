const chokidar = require('chokidar');
const { exec } = require('child_process');
const { join } = require('path');
const WebSocket = require('ws');
const fs = require('fs');

const wss = new WebSocket.Server({ port: 8080 });
let currentBuild = null;
const customChartProjectPath = join(__dirname, '../projects/custom-chart');

// Helper function to copy static assets
function copyStaticAssets() {
  const outputDir = join(__dirname, '../custom-chart-build-output');
  
  // Copy manifest.json
  fs.copyFileSync(
    join(customChartProjectPath, 'src/manifest.json'),
    join(outputDir, 'manifest.json')
  );
  
  // Copy icon.svg
  fs.copyFileSync(
    join(customChartProjectPath, 'src/icon.svg'),
    join(outputDir, 'icon.svg')
  );
  
  console.log('Static assets copied to build output directory');
}

// Build function that runs esbuild and copies static assets
function buildChart() {
  if (currentBuild) {
    currentBuild.kill();
  }

  console.log('Building chart...');
  
  currentBuild = exec('npm run build', { cwd: join(customChartProjectPath) }, (error, stdout, stderr) => {
    if (error) {
      console.error('Build failed:', error);
      console.error(stderr);
      return;
    }
    
    console.log(stdout);
    
    // After building JS/CSS, copy static assets
    try {
      copyStaticAssets();
      console.log('Build completed successfully');
      
      // Notify connected clients
      wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
          client.send('watcher-rebuild');
        }
      });
    } catch (copyError) {
      console.error('Error copying static assets:', copyError);
    }
  });
}

buildChart();

// Watch for changes
chokidar.watch([
  join(customChartProjectPath, 'src')
], {
  ignoreInitial: true,
  persistent: true,
  ignored: /(^|[\/\\])\../,
  useFsEvents: false,
  usePolling: true,
  interval: 1000
}).on('change', (path) => {
  console.log(`File ${path} has been changed`);
  buildChart();
});

console.log('Watching for file changes...');
