// Get 'toRender' data from server
const data = JSON.parse(sketchData);
const parentElement = 'canvas-container';

let player = {
  xVel: 0,
  yVel: 0,
  xPos: 40,
  yPos: 40,
  dampening: 5,
  size: 15,
}

function setup() {
  const canvas = createCanvas(400, 400);
  canvas.parent(parentElement);
  rectMode(CENTER);

  console.log(`Project '${data.projectName}' loaded successfully. (~:`);
}

function draw() {
  background(220);
  text(data.testText, 5, 20);
  rect(player.xPos, player.yPos, player.size, player.size);

  mouseInput();
}

function mouseInput() {
  player.xVel = movedX;
  player.yVel = movedY;

}