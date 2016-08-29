function setup() {
  var customCanvas = createCanvas(window.innerWidth, window.innerHeight);
  customCanvas.position(0,0);
}

//Draw() loops constantly.
function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);

}
