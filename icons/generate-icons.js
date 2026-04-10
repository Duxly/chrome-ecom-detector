/**
 * Generate extension icons
 * Creates simple PNG icons with shopping cart + magnifying glass
 */

const fs = require('fs');
const { createCanvas } = require('canvas');

function drawIcon(size) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  const scale = size / 128;
  
  // Background
  ctx.fillStyle = '#1a1a2e';
  ctx.fillRect(0, 0, size, size);
  
  // Shopping cart (accent color #e94560)
  ctx.strokeStyle = '#e94560';
  ctx.fillStyle = '#e94560';
  ctx.lineWidth = Math.max(2, 3 * scale);
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  
  // Cart body
  ctx.beginPath();
  ctx.moveTo(30 * scale, 40 * scale);
  ctx.lineTo(35 * scale, 70 * scale);
  ctx.lineTo(85 * scale, 70 * scale);
  ctx.lineTo(90 * scale, 40 * scale);
  ctx.closePath();
  ctx.stroke();
  
  // Cart wheels
  ctx.beginPath();
  ctx.arc(45 * scale, 80 * scale, 4 * scale, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(75 * scale, 80 * scale, 4 * scale, 0, Math.PI * 2);
  ctx.fill();
  
  // Magnifying glass (white)
  ctx.strokeStyle = '#ffffff';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
  ctx.lineWidth = Math.max(2, 3 * scale);
  
  // Glass circle
  ctx.beginPath();
  ctx.arc(85 * scale, 50 * scale, 18 * scale, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  // Handle
  ctx.beginPath();
  ctx.moveTo(98 * scale, 63 * scale);
  ctx.lineTo(110 * scale, 75 * scale);
  ctx.stroke();
  
  return canvas;
}

// Generate icons
try {
  const icon16 = drawIcon(16);
  const icon48 = drawIcon(48);
  const icon128 = drawIcon(128);
  
  fs.writeFileSync('icon16.png', icon16.toBuffer('image/png'));
  fs.writeFileSync('icon48.png', icon48.toBuffer('image/png'));
  fs.writeFileSync('icon128.png', icon128.toBuffer('image/png'));
  
  console.log('✓ Icons generated successfully');
} catch (error) {
  console.error('Error generating icons:', error.message);
  console.log('Install canvas package: npm install canvas');
}
