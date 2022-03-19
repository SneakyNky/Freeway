
function setup() {
  createCanvas(500, 400);
  soundTrack.loop();
}

function draw() {
  background(roadImage);
  showActor();
  showCar();
  movementCar();
  movementActor();
  loopCar();
  verifyHit();
  showPoints();
  markScore();
}




