// Get 'toRender' data from server
const data = JSON.parse(sketchData);
const parentElement = 'canvas-container';

let physicalTracking = false;
let height = 400;
let width = 400;
let debugText = false;
// For moving the DVD icon
let xVel = 5;
let yVel = 5;

let player = {
  xVel: 0,
  yVel: 0,
  xPos: 110,
  yPos: 65,
  dampening: 5,
  shove: 1,
  xSize: 220,
  ySize: 130,
}

function randomTint() {
  tint(random(100, 255), random(100, 255), random(100, 255));
}

function setup() {
  img = loadImage('dvd.png');

  width = windowWidth;
  height = windowHeight;
  const canvas = createCanvas(width, height);
  canvas.parent(parentElement);
  rectMode(CENTER);
  imageMode(CENTER);
  tint(random(255), random(255), random(255));

  console.log(`Project '${data.projectName}' loaded successfully. (~:`);
}

function draw() {
  background(15);
  if (debugText) {
    text(data.testText, 5, 20);
    text(`Kinetic tracking: ${physicalTracking} (Click to toggle.)`, 15, 35);
    text(`Pos: X ${player.xPos} | Y ${player.yPos}`, 15, 50);
    text(`Vel: X ${player.xVel} | Y ${player.yVel}`, 15, 65);
  }
  image(img, player.xPos, player.yPos, player.xSize, player.ySize);

  mouseInput();
}

function windowResized() {
  width = windowWidth;
  height = windowHeight;
  resizeCanvas(windowWidth, windowHeight);
}

// Toggle control
function keyPressed() {
  if (physicalTracking) {
    physicalTracking = false;
    exitPointerLock();
    player.xVel = 0;
    player.yVel = 0;
  } else {
    requestPointerLock();
    physicalTracking = true;
  }
}

function moveManually() {
  // Get mouse input
  player.xVel += movedX;
  player.yVel += movedY;
  // check for bounce
  if (player.xPos + (player.xSize / 2) > width) {
    player.xVel = -player.shove * 50;
    randomTint();
  } else if (player.xPos < (player.xSize / 2)) {
    player.xVel = player.shove * 50;
    randomTint();
  }
  if (player.yPos + (player.ySize / 2) > height) {
    player.yVel = -player.shove * 50;
    randomTint();
  } else if (player.yPos < (player.ySize / 2)) {
    player.yVel = player.shove * 50;
    randomTint();
  }

  // Move the player based on its velocity
  player.xPos += player.xVel;
  player.yPos += player.yVel;

  // Slow down the player by the dampening factor
  player.xVel -= player.xVel / player.dampening;
  player.yVel -= player.yVel / player.dampening;
}

function moveAutomatically() {
  // DVD behaviour
  player.xPos += player.xVel;
  player.yPos += player.yVel;
  player.xPos += xVel;
  player.yPos += yVel;

  if (player.yPos > height - (player.ySize / 2) || player.yPos < (player.ySize / 2)) {
    yVel = yVel * -1;
    randomTint();
  }
  if (player.xPos > width - (player.xSize / 2) || player.xPos < (player.xSize / 2)) {
    xVel = xVel * -1;
    randomTint();
  }
}

function mouseInput() {
  if (physicalTracking) {
    moveManually();
  } else {
    moveAutomatically();
  }
}
