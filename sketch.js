var sea = createSprite(200, 200);
var ship = createSprite(200,200);
var seaimg;
var shipimg;


function preload(){
  seaimg = loadAnimation("sea.png");
  shipimg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  
}

function setup(){
  createCanvas(400,400);
  sea.addAnimation("sea",seaimg);
  ship.addAnimation("ship",shipimg);
}

function draw() {
  background("blue");
 
sea.velocityX = 2;

if(sea.x < 0){
  sea.x = sea.width/2;
}

  drawSprites();
}