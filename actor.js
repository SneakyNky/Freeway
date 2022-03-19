
//actor
let xActor = 85;
let yActor = 366;
let hit = false;
let score = 0;

function showActor(){
    image(actorImage, xActor, yActor, 30, 30);
}

function movementActor(){
  if (keyIsDown(UP_ARROW)){
    yActor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (canMove()){
    yActor += 3;
    }
  }
}

function verifyHit(){
  for (let i = 0; i < carImage.length; i++){
    hit = collideRectCircle(xCar[i], yCar[i], carLength, carHeight, xActor, yActor, 15)
    if (hit){
      spotted();
      soundColide.play();
      if (scorePositive()){
      score -= 1;
        
      }
    }
  }
}

function spotted(){
  yActor = 366;
}

function showPoints(){
  fill(color(64, 224, 208))
  textAlign(CENTER);
  textSize(25);
  text(score, width / 5, 26)
}

function markScore(){
 if (yActor < 15){
   score += 1;
   soundScore.play();
   spotted();
 } 
}

function scorePositive(){
  return score > 0
}

function canMove(){
  return yActor < 366;
}