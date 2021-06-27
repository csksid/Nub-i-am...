var bath, brush, drink, eat, gym, move, sleep
var Astronaut
var  bg





function preload(){
  bg = loadImage("images/iss.png")
  bath = loadAnimation("bath1.png, bath2.png")
  brush = loadImage("brush.png")
  drink = loadAnimation("drink1.png, drink2.png")
  eat = loadAnimation("eat1.png, eat2.png")
  gym = loadAnimation("gym1.png, gym2.png, gym11.png, gym12.png")
  move = loadAnimation("move.png, move1.png")
  sleep = loadAnimation("sleep.png")
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  Astronaut = createSprite(300, 230)
  Astronaut.addAnimation("sleeping", sleep)
  Astronaut.scale =  0.1

  if(keyDown("UP")){
    Astronaut.addAnimation("brushing", brush)
    Astronaut.changeAnimation("brushing")
    Astronaut.y = 350
    Astronaut.velocityX = 0
    Astronaut.velocityY = 0
  }
}




function draw() {
  background(255,255,255);  
  drawSprites();
}