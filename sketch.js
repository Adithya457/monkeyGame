
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
   FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,1000,10);
  ground.velocityX = -4;
   ground.x=ground.width/2;
  console.log(ground);
  
}


function draw() {
   background("white");
 
  if (ground.x < 0){
      ground.x = ground.width/2;
  }
  if(keyDown("space")) {
        monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
    

  monkey.collide(ground);
  
   
  
  if (frameCount % 100 === 0) {
     banana = createSprite(400,100,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage("banana.png",bananaImage);
    banana.scale = 0.1;
    //banana.velocityX = -(3+score/100);
     banana.velocityX = -3;
     
    FoodGroup.add(banana);
 }
  if (frameCount % 300 === 0) {
     stone = createSprite(400,100,40,10);
    stone.y = Math.round(random(325,325));
    stone.addImage("obstacle.png", obstaceImage);
    stone.scale = 0.1;
    //banana.velocityX = -(3+score/100);
     stone.velocityX = -3;
     
    obstacleGroup.add(stone);
 }
  
  if(FoodGroup.isTouching(monkey)){
    FoodGroup.destroyEach();
    
    score = score +2;
    
  }
  if(obstacleGroup.isTouching(monkey)){
      ground.velocityX = 0;
       FoodGroup.velocityX = 0;
       obstacleGroup.velocityX = 0;
    
       if(obstacleGroup.isTouching(monkey)){
      ground.velocityX = 0;
       FoodGroup.velocityX = 0;
       obstacleGroup.velocityX = 0;
    
    }
  obstacleGroup.setLifetimeEach(-1);
    FoodGroup.setLifetimeEach(-1);
     
     obstacleGroup.setVelocityXEach(0);
     FoodGroup.setVelocityXEach(0);
    
    score = 0;
    }
  
    
  
  drawSprites();
   
  textSize(30); 
    text("Score: "+ score, 200,50);

    
    
  
  
  
}

  
 







