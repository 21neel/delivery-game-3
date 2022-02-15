//character
var mainboy,mainboy_img;

//bg
var bg,bg_img;
var level2_img;
//var sslevel2_img;

//obstcales
var cone2,cone2animation;
var rock0,rock1;
var rock0_img,rock1_img;
var caution,cautionanimation;
var student,studentanimation;
var signal,signalanimation;
var signal2,signal2animation;
var newcone,newconeanimation;
var man,mananimation;
var boy,boyanimation;
var newcaution,newcaution_img;

//buttons
var button;
var button2;
var button3;
var button_img;

//cars
var car,car2,car3,car4,car5;
var truck;
var newcar_img,newcar2_img,newcar3_img;
var truck2,truck2_img;
var sport,sport2;
var sport3,sport3_img;
var sport_img,sport2_img;
var truck_img;
var bike,bike_img;

//coins
var coin,coin2,coin3,coin4,coin5,coin_animation;

//house
//var house2,house2_img;
//var house3,house3_img;
//var house4,house4_img;

//gamestate
var gameState=1

//---------*----------

function preload(){

  //bg_img
  bg_img = loadImage("assets/bg.gif");

  //car_img
  sport_img = loadImage("assets/sport.png");
  sport2_img = loadImage("assets/sport2.png");
  truck_img = loadImage("assets/truck.png");
  truck2_img = loadImage("assets/xuv.png");
  newcar_img = loadImage("assets/newcar.png");
  newcar2_img = loadImage("assets/newcar2.png");
  newcar3_img = loadImage("assets/newcar3.png")
  bike_img = loadImage("assets/bike.png")
  sport3_img = loadImage("assets/sport.png")

  //character_img
  mainboy_img = loadImage("assets/mainboy.png");

  //obstacle_img
  cautionanimation = loadAnimation("assets/caution1.gif","assets/caution2.gif","assets/caution1.gif","assets/caution2.gif")
  cone2animation = loadAnimation("assets/cone2.gif","assets/cone3.gif","assets/cone2.gif","assets/cone3.gif");
  //rock0_img = loadImage("assets/rock0.png")
  //rock1_img = loadImage("assets/rock1.png");
  studentanimation = loadAnimation("assets/student.gif","assets/student1.gif","assets/student3.gif","assets/student4.gif","assets/student5.gif","assets/student6.gif","assets/student7.gif","assets/student8.gif","assets/student9.gif","assets/student10.gif","assets/student11.gif")
  signalanimation = loadAnimation("assets/signal1.gif","assets/signal2.gif","assets/signal3.gif");
  newconeanimation  = loadAnimation("assets/newcone1.gif","assets/newcone2.gif","assets/newcone1.gif","assets/newcone3.gif","assets/newcone4.gif","assets/newcone5.gif","assets/newcone6.gif","assets/newcone7.gif","assets/newcone8.gif","assets/newcone9.gif","assets/newcone10.gif",);
  newcaution_img = loadImage("assets/newcaution.gif")
  mananimation = loadAnimation("assets/man1.gif","assets/man2.gif","assets/man3.gif","assets/man4.gif","assets/man5.gif","assets/man6.gif","assets/man7.gif","assets/man8.gif","assets/man9.gif","assets/man10.gif")
  boyanimation = loadAnimation("assets/boy1.gif","assets/boy2.gif","assets/boy3.gif","assets/boy4.gif","assets/boy5.gif","assets/boy6.gif","assets/boy7.gif","assets/boy8.gif","assets/boy9.gif","assets/boy10.gif",) 
  signal2animation = loadAnimation("assets/signal1.gif","assets/signal2.gif","assets/signal3.gif");

  //level2
  level2_img = loadImage("assets/level2.jpg")

  //house_img
  //house2_img = loadImage("assets/house7.png");
  //house3_img = loadImage("assets/house8.png")
  //house4_img = loadImage("assets/house5.png")

  //button_img
  button_img = loadImage("assets/next.png");

  //coin_img
  coin_animation = loadAnimation("assets/coin.gif","assets/coin2.gif","assets/coin3.gif","assets/coin4.gif")

}

//-----*------

function setup() {
  createCanvas(1440,822);
  
  //character
  mainboy = createSprite(100,780,10,10);
  mainboy.addImage(mainboy_img);
  mainboy.scale = 0.1

  //obstacles
 //rock0 = createSprite(1030,200,20,20);
 //rock0.addImage(rock0_img);
 //rock0.scale = 0.2

 //rock1 = createSprite(90,695,20,20);
 //rock1.addImage(rock1_img);
 //rock1.scale = 0.06

 cone2 = createSprite(270,105,20,20);
 cone2.addAnimation("move",cone2animation)
 cone2.scale = 0.3

 caution = createSprite(565,20,20,20);
 caution.addAnimation("blink",cautionanimation);  
 caution.scale = 0.13

 student = createSprite(750,330,20,20);
 student.addAnimation("walk",studentanimation);
 student.scale = 0.15

 man = createSprite(330,160,20,20);
 man.addAnimation("walk",mananimation);
 man.scale = 0.17
 
 boy = createSprite(420,590,20,20);
 boy.addAnimation("walk",boyanimation);
 boy.scale = 0.15

 signal = createSprite(250,20,20,20);
 signal.addAnimation("bulb",signalanimation);
 signal.scale = 0.08;

 signal2 = createSprite(1410,635,80,80);
 signal2.addAnimation("bulb",signal2animation);
 signal2.scale = 0.07;

 newcaution = createSprite(80,400,20,20);
 newcaution.addImage(newcaution_img);
 newcaution.scale = 0.14

 newcone = createSprite(1030,190,20,20);
 newcone.addAnimation("round",newconeanimation);
 newcone.scale = 0.1
  
  //coins
  coin = createSprite(450,453,20,20)
  coin.addAnimation("moving",coin_animation)
  coin.scale = 0.09
  coin2 = createSprite(1200,509,20,20);
  coin2.addAnimation("moving",coin_animation)
  coin2.scale = 0.09
  coin3 = createSprite(900,113,20,20);
  coin3.addAnimation("moving",coin_animation)
  coin3.scale = 0.09
  coin4 = createSprite(1350,150,20,20);
  coin4.addAnimation("moving",coin_animation)
  coin4.scale = 0.09
  coin5 = createSprite(565,50,20,20);
  coin5.addAnimation("moving",coin_animation)
  coin5.scale = 0.09

  
  //house
  //house2 = createSprite(844,191,20,20);
  //house2.addImage(house2_img);
  //house2.scale = 0.3

  //house3 = createSprite(130,150,20,20);
  //house3.addImage(house3_img);
  //house3.scale = 0.35

  //house4 = createSprite(1195,162,20,20);
  //house4.addImage(house4_img);
  //house4.scale = 0.34

  //cars
  car = createSprite(420,480,23,40);
  car.addImage(newcar_img);
  car.scale = 0.14

  car2 = createSprite(472,400,23,49);
  car2.addImage(newcar2_img);
  car2.scale = 0.13

  car3 = createSprite(957,741,26,43);
  car3.addImage(newcar3_img);
  car3.scale = 0.13;

  car4 = createSprite(770,110,20,54);
  car4.addImage(newcar_img);
  car4.scale = 0.15

  car5 = createSprite(420,80,10,10)
  car5.addImage(newcar2_img);
  car5.scale = 0.14

  truck = createSprite(1345,60,29,55);
  truck.addImage(truck_img)
  truck.scale = 0.25

  truck2 = createSprite(417,145,50,20);
  truck2.addImage(truck2_img);
  truck2.scale = 0.32

  sport = createSprite(257,300,20,20);
  sport.addImage(sport_img)
  sport.scale = 0.1

  sport2 = createSprite(290,330,20,20);
  sport2.addImage(sport2_img)
  sport2.scale = 0.16

  sport3 = createSprite(980,500,20,20);
  sport3.addImage(sport3_img)
  sport3.scale = 0.1
  //btn
  button=createSprite(1400,20,30,30);
  button.addImage(button_img)
  button.scale = 0.2

  button2=createSprite(1390,100,30,30);
  button2.shapeColor = "red"

  bike = createSprite(1350,450,20,20);
  bike.addImage(bike_img);
  bike.scale = 0.12

  //button3=createSprite(1390,100,30,30)
  //button3.shapeColor= "blue"
}

function draw() {
  createEdgeSprites();
  mainboy.bounce(car);
  mainboy.bounce(car2);
  mainboy.bounce(car3);
  mainboy.bounce(car4);
  mainboy.bounce(truck);
  
//rotations
car.rotation=8
car2.rotation=58
car3.rotation=28
car4.rotation=90
car5.rotation=90
truck.rotation=170
truck2.rotation=270
sport.rotation = 105
sport2.rotation = 114
sport3.rotation = 260
//house2.rotation = 180
bike.rotation = 75
newcaution.rotation = 270
signal2.rotation = 450



if (gameState===1) {
  background(bg_img)

 mainboy.visible=true
 button.visible=true
 button2.visible=false
 //car.visible = false
 //car2.visible = false
 //car3.visible = false
 //car4.visible = false
 car5.visible = false
 //truck.visible = false

  if(keyDown("up"))
  {
    mainboy.y=mainboy.y-4
    mainboy.rotation=360
  }

  if(keyDown("down"))
  {
    mainboy.y=mainboy.y+4
  }

  if(keyDown("right"))
  {
    mainboy.x=mainboy.x+4
    mainboy.rotation=45
  }


  if(keyDown("left"))
  {
    mainboy.rotation=315
    mainboy.x=mainboy.x-4
  }
   
}
if (gameState===2) {
  background(level2_img)
  //visible = false for level2

  button.visible=false
  button2.visible = true
  cone2.visible = false;
  rock0.visible = false;
  rock1.visible = false;
  caution.visible = false;
  person.visible = false;
  signal.visible = false;
  newcone.visible = false;
  newcaution.visible = false;
  car.visible = false;
  car2.visible = false;
  car3.visible = false;
  car4.visible = false;
  car5.visible = false;
  truck.visible = false;
  truck2.visible = false;
  sport.visible = false;
  sport2.visible = false;
  bike.visible = false;
  coin.visible = false;
  coin2.visible = false;
  coin3.visible = false;
  coin4.visible = false;
  coin5.visible = false;
  house2.visible = false;
  house3.visible = false;
  house4.visible = false;
  if(keyDown("up"))
  {
    mainboy.y=mainboy.y-4
    mainboy.rotation=360
  }

  if(keyDown("down"))
  {
    mainboy.y=mainboy.y+4
  }

  if(keyDown("right"))
  {
    mainboy.x=mainboy.x+4
    mainboy.rotation=45
  }


  if(keyDown("left"))
  {
    mainboy.rotation=315
    mainboy.x=mainboy.x-4
  }

}
 if (mousePressedOver(button)) {
   gameState=2
 }

 //ellipseMode(RADIUS);

  drawSprites();
}