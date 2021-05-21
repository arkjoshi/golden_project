var bus , school, girl1, girl2, girl3, girl4;
var RightBus, LeftBus , UpBus, DownBus, schoolIMG, Boy1, Girl1, Girl2, Girl3;
var wall1, wall2, wall3, wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14;
var gamestate = "play";
var life = 5;
var kid = 0;
function preload(){
  RightBus = loadImage("busImage/RightBus.png");
  LeftBus = loadImage("busImage/LeftBus.png");
  UpBus = loadImage("busImage/UpBus.png");
  DownBus = loadImage("busImage/DownBus.png");
  schoolIMG = loadImage("School.png");
  Boy1 = loadImage("Kids/Boy1.png");
  Girl1 = loadImage("Kids/Girl1.png");
  Girl2 = loadImage("Kids/Girl2.png");
  Girl3 = loadImage("Kids/Girl3.png");
}
function setup() {
  createCanvas(800,400);
  bus = createSprite(400,200);
  bus.addImage(RightBus);
  bus.debug = false;
  bus.setCollider("rectangle",0,0,40,40)
  school = createSprite(750,350);
  school.addImage(schoolIMG);
 

  //bus.scale = 0.2;
  wall1 = createSprite(400,5,800,15);
  wall1.shapeColor = "blue";
  

  girl1 = createSprite(350,360);
  girl1.addImage(Girl1);
  girl1.scale = 0.3;
  girl2 = createSprite(500,290);
  girl2.addImage(Girl2);
  girl2.scale = 0.4;
  girl3 = createSprite(50,35);
  girl3.addImage(Girl3);
  girl3.scale = 0.3;
  girl4 = createSprite(700,45);
  girl4.addImage(Boy1);
  girl4.scale = 0.3;
  wall2 = createSprite(400,395,800,15);
  wall2.shapeColor = "blue";
  wall3 = createSprite(0,200,15,400);
  wall3.shapeColor = "blue";
  wall4 = createSprite(795,200,15,400);
  wall4.shapeColor = "blue";
  wall5 = createSprite(60,70,150,25);
  wall5.shapeColor = "blue";
  wall6 = createSprite(480,140,15,100);
  wall6.shapeColor = "blue";
  wall7 = createSprite(15,200,120,25);
  wall7.shapeColor = "blue";
  wall8 = createSprite(585,200,200,25);
  wall8.shapeColor = "blue";
  wall9 = createSprite(635,90,150,25);
  wall9.shapeColor = "blue";
  wall10 = createSprite(635,140,150,25);
  wall10.shapeColor = "blue";
  wall11 = createSprite(300,80,250,25);
  wall11.shapeColor = "blue";
  wall12 = createSprite(300,250,250,25);
  wall12.shapeColor = "blue";
  wall13 = createSprite(100,335,250,25);
  wall13.shapeColor = "blue";
  wall14 = createSprite(500,335,250,25);
  wall14.shapeColor = "blue";
}

function draw() {
  background("black");
  fill("cyan");

  
  if(gamestate==="play"){
  if(keyDown(LEFT_ARROW))
  {
    bus.addImage(LeftBus);
    bus.x = bus.x-2;
    
  }
  if(keyDown(RIGHT_ARROW))
  {
    bus.addImage(RightBus);
    bus.x = bus.x+2;
  }
  if(keyDown(UP_ARROW))
  {
    bus.addImage(UpBus);
    bus.y = bus.y - 2;
  }
  if(keyDown(DOWN_ARROW))
  {
    bus.addImage(DownBus);
    bus.y = bus.y + 2;
  }

  if(bus.collide(wall1)|| bus.collide(wall2) || bus.collide(wall3) || bus.collide(wall4)||
  bus.collide(wall5)|| bus.collide(wall6) || bus.collide(wall7)|| bus.collide(wall8)
  || bus.collide(wall9) || bus.collide(wall10) || bus.collide(wall11)
  || bus.collide(wall12) || bus.collide(wall13) || bus.collide(wall14)
  ){
    bus.x = 400 ;
    bus.y = 200 ;
    life = life-1;
  }
  fill("white");
  text("life : " + life,50,380);
  if(bus.isTouching(girl1)){
    girl1.destroy();
    kid++;
  }
  if(bus.isTouching(girl2)){
    girl2.destroy();
    kid++;
  }
  if(bus.isTouching(girl3)){
    girl3.destroy();
    kid++;
  }
  if(bus.isTouching(girl4)){
    girl4.destroy();
    kid++;
  }
  if(kid === 4 && bus.collide(school)){
    text("you win");
  }
if(life === 0){
  gamestate = "end";
}

  drawSprites();
}
else if(gamestate === "end"){

}
}
