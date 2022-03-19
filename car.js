//Carros
let xCar = [600, 600, 600, 600, 600, 600]
let yCar = [40, 96, 150, 210, 270, 318];
let carSpeed =[2.5, 3, 4, 2, 2.5, 4];
let carLength = 50;
let carHeight = 40;


function showCar(){
  for (let i = 0; i < carImage.length; i++){
   image( carImage[i], xCar[i], yCar[i], carLength , carHeight);
  }
}

function movementCar(){
  for (let i = 0; i < carImage.length; i++){
   xCar[i] -= carSpeed[i];
  }
}

function loopCar(){
  for (let i = 0; i < carImage.length; i++){
   if(verifyCar(xCar[i])){
    xCar[i] = 600;
  }
 }   
}

function verifyCar(xCar){
  return xCar < -50;
}
