var sea;
var ship;
var seaimg;
var shipimg;


function preload(){
  seaimg = loadAnimation("sea.png");
  shipimg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  
}

function setup(){
  createCanvas(400,400);
  sea.addAnimation(seaimg);
  ship.addAnimation(shipimg);
}

function draw() {
  background("blue");
 
sea.velocityX = 2;

if(sea.x < 0){
  sea.x = sea.width/2;
}

  drawSprites();
}