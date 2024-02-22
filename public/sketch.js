// Get 'toRender' data from server
const data = JSON.parse(sketchData);
const parentElement = 'canvas-container';

let physicalTracking = false;
let height = 400;
let width = 400;

let player = {
  xVel: 0,
  yVel: 0,
  xPos: 40,
  yPos: 40,
  dampening: 5,
  shove: 1,
  size: 10,
}

function setup() {
  width = windowWidth;
  height = windowHeight;
  const canvas = createCanvas(width, height);
  canvas.parent(parentElement);
  rectMode(CENTER);

  console.log(`Project '${data.projectName}' loaded successfully. (~:`);
}

function draw() {
  background(220);
  text(data.testText, 5, 20);
  text(`Kinetic tracking: ${physicalTracking} (Click to toggle.)`, 15, 35);
  text(`Pos: X ${player.xPos} | Y ${player.yPos}`, 15, 50);
  text(`Vel: X ${player.xVel} | Y ${player.yVel}`, 15, 65);
  rect(player.xPos, player.yPos, player.size, player.size);

  mouseInput();
}

function mouseClicked() {
  if (physicalTracking) {
    physicalTracking = false;
  } else {
    requestPointerLock()
    physicalTracking = true;
    noCursor();
  }
}

function mouseInput() {
  if (physicalTracking) {
    // Get mouse input
    player.xVel += movedX;
    player.yVel += movedY;
    // check for bounce
    if (player.xPos + (player.size / 2) > width) {
      player.xVel = -player.shove * 50;
      player.yVel = player.shove * player.yVel * 5;

    } else if (player.xPos < (player.size / 2)) {
      player.xVel = player.shove * 50;
    }
    if (player.yPos + (player.size / 2) > height) {
      player.yVel = -player.shove * 50;
    } else if (player.yPos < (player.size / 2)) {
      player.yVel = player.shove * 50;
    }

    // Move the player based on its velocity
    player.xPos += player.xVel;
    player.yPos += player.yVel;

    // Slow down the player by the dampening factor
    player.xVel -= player.xVel / player.dampening;
    player.yVel -= player.yVel / player.dampening;
  } else {
    // Simple non-kinetic tracking
    player.xPos = mouseX;
    player.yPos = mouseY;
  }
}
