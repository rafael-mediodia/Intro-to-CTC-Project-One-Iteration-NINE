let cellWidth = 800,
  cellHeight = 800;
let rows, cols;
let words = ['If', 'you', 'are', 'reading', 'this', 'you', 'probably', 'have', 'some', 'tie', 'to', 'RISD', 'dont', 'you?'];
let colors = ['#002AFF'];
let font;
let wordIndex = 0;

function preload() {
  font = loadFont('Karrik-Regular.ttf');
}

function setup() {
  cols = Math.floor(windowWidth / cellWidth);
  rows = Math.floor(windowHeight / cellHeight);
  createCanvas(800, 800);
  frameRate(2);
  capture = createCapture(VIDEO);
  capture.size(800, 800);
}

function draw() {
  background(255);
  image(capture, 0, 0, width, height); 

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = (i + 0.5) * cellWidth;
      let y = (j + 0.5) * cellHeight;

      let word = words[wordIndex];
      let color = random(colors);

      textFont(font);
      textSize(46);
      textAlign(CENTER);
      noStroke();

      for (let keyword of words) {
        if (word === keyword) {
          text(keyword, x, y);
          break;
        }
      }

     
    }
  }
  wordIndex = (wordIndex + 1) % words.length;
  text('[ACCURATE IDENTIFIER]', 400, 750);
}

function mouseClicked() {
  setup();
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('myCanvas', 'png');
  }
}
