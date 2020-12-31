var PLAY = 1;
var END = 0;

var gameState = PLAY;

var score = 0;

var player,track;
var playerimg,trackimg;

var leftedge,rightedge;

var obst1,obst2,obst3,obst4;
var obstgroup;

function preload(){
playerimg = loadImage("images/player.png");
trackimg = loadImage("images/track.gif");

obst1 = loadImage("images/obst-1.png");
obst2 = loadImage("images/obst-2.png");
obst3 = loadImage("images/obst-3.png");
obst4 = loadImage("images/obst-4.png");
}

function setup() {
  createCanvas(800,800);

  track = createSprite(400,400,50,50);
  track.addImage(trackimg);

  player = createSprite(400, 720, 50, 50);
  player.addImage(playerimg);

  leftedge = createSprite(0, 400, 10, 800);

  rightedge = createSprite(800, 400, 10, 800);

  track.y = track.height/2;

  obstgroup = new Group();

}

function draw() {
  background("grey");

  textFont("impact");
  stroke("red");
  fill("yellow");
  textSize(30);

  score = score + Math.round(getFrameRate()/60);

  player.scale = 1.3;
  track.scale = 2;

  track.velocityY = 4;

  if(keyIsDown(LEFT_ARROW)){
    player.x = player.x - 10;
  }

  if(keyIsDown(RIGHT_ARROW)){
    player.x = player.x + 10;
  }

  player.collide(leftedge);
  player.collide(rightedge);

 if(track.y>800){
   track.y = track.height/2;
 }

 drawSprites();

 text("Score: "+ score, 30,30);

 createobstacle();
}

function createobstacle(){
  if(frameCount%100==0){
   var obstacle = createSprite(random(100,700),0,50,50);
   obstacle.velocityY = 4;
   obstacle.scale = 1.3;

   var rand = Math.round(random(1,4));

   switch(rand) {
    case 1: obstacle.addImage(obst1);
            break;
    case 2: obstacle.addImage(obst2);
            break;
    case 3: obstacle.addImage(obst3);
            break;
    case 4: obstacle.addImage(obst4);
            break;
    default: break;
  }
    obstacle.lifetime = 300;

    obstgroup.add(obstacle);
  }
}