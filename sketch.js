var ballon;
function preload(){
bgimg=loadImage("images/bg.png")
ballonimg=loadImage("images/ballon.png")
}


function setup() {
  createCanvas(800,400);
  ballon=createSprite(400, 200, 50, 50);
  ballon.addImage("k",ballonimg)
  ballon.scale=0.5
}

function draw() {
  background(bgimg);  
  
  drawSprites();
}