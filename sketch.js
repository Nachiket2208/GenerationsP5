let x, y, dt;
let step;

function setup() {
  createCanvas(400, 400);
  dt = 0.03;
  x = 0;
  y = 0;
  z = 0;
  step = 5;
  noStroke();
  colorMode(RGB);
}

function draw() {
  for (let i = 0; i < height; i += step) {
    for (let j = 0; j < width; j += step) {
      let n = noise(x, y,z );
      x += dt;

      let b = 10;
      let terr = floor(n * b);
      let c = (terr / b) * 125;
      fill(c, 30, 60);
      ellipse(i, j, step * 5, step * 5);
    }
    x = 0;
    y += dt;
  }
  y = 0;
  z += dt;
}
