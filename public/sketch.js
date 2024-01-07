// Get 'toRender' data from server
const data = JSON.parse(sketchData);

function setup() {
  const canvas = createCanvas(400, 400);
  canvas.parent('canvas-container');
  
  console.log(`Project '${data.projectName}' loaded successfully. (~:`);
}

function draw() {
  background(220);
  text(data.testText, 5, 20);
}