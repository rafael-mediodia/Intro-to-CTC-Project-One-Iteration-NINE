let cellWidth = 800, cellHeight = 800;
//seperation of cell height and width to change the shape more
let rows, cols;
//var capture;
let words = ['if', 'you', 'are', 'reading','this','you','probably','have','some','tie','to','risd','dont','you?'];
let colors = ['#002AFF', '#1856FF', '#3357FF', '#3B47FF', ];
let font;
let wordIndex = 0;

function preload() {
  font = loadFont('Karrik-Regular.ttf');
}
//set up global variables

function setup() {
  //setting up operation to get an integer
  cols = Math.floor(windowWidth / cellWidth);
  rows = Math.floor(windowHeight / cellHeight);
  createCanvas(800,800);
  frameRate(1.7);
  capture = createCapture(VIDEO);
  capture.size(800, 800);
  //moves the rate of refresh
}

function draw() {
  background(255);
   image(capture, 0, 0, width, height);
  tint(255,100)
  for (let i = 0; i < cols; i=i+1) {
    for (let j = 0; j < rows; j=j+1) {
      let word = words[wordIndex];
      let color = random(colors);
      textFont(font);
      fill(color);
      textSize(46);
      textAlign(CENTER);
      noStroke();
      //this is the conditional statement
      if (word === 'if') {
        text('if',400,400);
      } else if (word === 'you') {
        text('you',400,400);
      } else if (word === 'are') {
        text('are',400,400);
      } else if (word === 'reading') {
        text('reading',400, 400);
      } else if(word === 'this'){
        text('this',400,400);
      } else if(word === 'you') {
        text('you', 400,400)
      } else if(word === 'probably') {
        text('probably', 400,400)
      }else if(word === 'have') {
        text('have', 400,400)
      }else if(word === 'some') {
        text('some', 400,400)
      }else if(word === 'tie') {
        text('tie', 400,400)
      }else if(word === 'to') {
        text('to', 400,400)
      }else if(word === 'risd') {
        text('RISD', 400,400)
      } else if(word === 'dont') {
        text('Dont', 600,400)
      }else if(word === 'youu') {
        text('you?', 600,400)
      }
       wordIndex = (wordIndex + 1) % words.length;
    }
  }
  text('[ACCURATE IDENTIFIER]',400,750);
}
//BOTH OF THESE FUNCTIONS MUST STAY!
function mouseClicked() {
  setup();
}
  
function keyPressed() {
  if (key === 's') {
    saveCanvas('myCanvas', 'png');
  }
}
