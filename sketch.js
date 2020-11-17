
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
 
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  
  obstacle=createSprite(400,320,900,30);
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.2;

  
}


function draw() {
background(255);
  if(ground.x<0){
    ground.x=ground.width/2;
    ground.velocityX=-12;
  }
  if(keyDown("space")){
   monkey.velocityY=-12;
  }
  monkey.velocityY= monkey.velocityY+0.8;
  
  monkey.collide(ground);
  drawSprites();
  
}






