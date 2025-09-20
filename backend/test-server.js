import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🧪 Testing server startup...');

// Start the server
const server = spawn('node', ['server.js'], {
  cwd: __dirname,
  stdio: ['pipe', 'pipe', 'pipe']
});

let output = '';
let errorOutput = '';

server.stdout.on('data', (data) => {
  output += data.toString();
  console.log('📤 Server output:', data.toString().trim());
});

server.stderr.on('data', (data) => {
  errorOutput += data.toString();
  console.log('❌ Server error:', data.toString().trim());
});

server.on('close', (code) => {
  console.log(`\n🏁 Server process exited with code ${code}`);
  
  if (code === 0) {
    console.log('✅ Server started successfully!');
  } else {
    console.log('❌ Server failed to start');
    console.log('Error output:', errorOutput);
  }
  
  process.exit(code);
});

// Kill server after 5 seconds
setTimeout(() => {
  console.log('\n⏰ Test timeout reached, stopping server...');
  server.kill();
}, 5000);
