//variable image and sound
let roadImage;
let actorImage;
let car1Image;
let car2Image;
let car3Image;

//sound
let soundTrack;
let soundColide;
let soundScore;



function preload(){
  roadImage = loadImage("Image/estrada.png");
  actorImage = loadImage("Image/ator-1.png");
  car1Image = loadImage("Image/carro-1.png");
  car2Image = loadImage("Image/carro-2.png");
  car3Image = loadImage("Image/carro-3.png");
  carImage = [car1Image, car2Image, car3Image, car1Image , car2Image, car3Image]
  soundTrack = loadSound("sound/trilha.mp3");
  soundColide = loadSound("sound/colidiu.mp3");
  soundScore = loadSound("sound/pontos.wav");
}