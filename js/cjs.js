var img;
function preload(){
  img = loadImage('images/echk.jpg');
}

function setup() {
  var customCanvas = createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  customCanvas.position(0,0);
  noStroke();
}

function draw() {
  //Disable canvas click
  document.getElementById('defaultCanvas0').style.pointerEvents = "none";
  background(255,255,255, 0);
  texture(img);
  //sphere(250,5,16);
  rotateY(map(mouseX, 0, width, 0, PI));
	rotateX(map(mouseY, 0, height, 0, PI));
  box(200);


}

function mousePressed(){

  loop()
}
