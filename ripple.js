let circles = [];
let prevMouseX = 0;
let prevMouseY = 0;
let speed = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  strokeWeight(1);
}

function draw() {
  clear();
  //text('speed: ' + round(speed), 20, 20);
  
  if (speed == 0) {
    if ( frameCount % 100 == 0) {
      if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
        //plonk(mouseX, mouseY);
      }
    }
  } else {
    if ( frameCount % max(round(20/speed),1) == 0) {
      if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
        // create a circle centered at the mouse
        plonk(mouseX, mouseY);
      }
    }
  }

  
  // loop through snowflakes with a for..of loop
  for (let c of circles) {
    c.update(); // update circle size
    c.display(); // draw circle
  }

  speed = sqrt(pow(mouseX - prevMouseX, 2) + pow(mouseY - prevMouseY, 2));
  prevMouseX = mouseX;
  prevMouseY = mouseY;
  
}

function plonk(x,y) {

  for(let l=1; l<=1; l+=0.1) {
    circles.push(new myCircle(x,y,l));
  }
}

// custom circle class
function myCircle(x, y, l) {
  // initialize coordinates
  this.wavelength = l;
  this.radius = 1;
  this.x = x;
  this.y = y;
  this.opacity = 255;


  this.update = function(time) {
    this.radius += sqrt(this.wavelength);
    this.opacity -= 1;

    // delete circle if extends beyond screen or fades away
    if (this.radius > max(width,height) || this.opacity == 0) {
      let index = circles.indexOf(this);
      circles.splice(index, 1);
    }
  
  };

  this.display = function() {
    stroke(255,255,255,this.opacity);
    strokeWeight(this.wavelength);
    circle(this.x, this.y, 2 * this.radius);
  };
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

