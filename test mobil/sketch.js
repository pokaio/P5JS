let r;
let g;
let b;

function setup() {
  createCanvas(1000, 1200);
}

function draw() {
  background(r, g, b)
}

function deviceShaken() {
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
}
