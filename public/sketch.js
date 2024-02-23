// Get 'toRender' data from server
const data = JSON.parse(sketchData);
const parentElement = 'canvas-container';

let physicalTracking = false;
let height = 400;
let width = 400;
let debugText = false;
// For moving the DVD icon
let xVel = 10;
let yVel = 10;

let player = {
  xVel: 0,
  yVel: 0,
  xPos: 40,
  yPos: 40,
  dampening: 5,
  shove: 1,
  xSize: 220,
  ySize: 130,
}

function randomTint() {
  tint(random(100, 255), random(100, 255), random(100, 255));
}

function setup() {
  img = loadImage('dvd-hi-res.png');

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
  background(220);
  if (debugText) {
    text(data.testText, 5, 20);
    text(`Kinetic tracking: ${physicalTracking} (Click to toggle.)`, 15, 35);
    text(`Pos: X ${player.xPos} | Y ${player.yPos}`, 15, 50);
    text(`Vel: X ${player.xVel} | Y ${player.yVel}`, 15, 65);
  }
  image(img, player.xPos, player.yPos, player.xSize, player.ySize);

  mouseInput();
}

// Toggle control
function keyPressed() {
  if (physicalTracking) {
    physicalTracking = false;
    exitPointerLock();
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
  player.xPos = mouseX;
  player.yPos = mouseY;
}

function mouseInput() {
  if (physicalTracking) {
    moveManually();
  } else {
    moveAutomatically();
  }
}
