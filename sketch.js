var iss, spacebg, sc1, sc2, sc3, sc4;
var issImg, spacebgImg, sc1Img, sc2Img, sc3Img, sc4Img;
var hasDocked;


function preload(){
  issImg = loadImage("images/iss.png");
  spacebgImg = loadImage("images/spacebg.jpg");
  sc1Img = loadImage("images/spacecraft1.png");
  sc2Img = loadImage("images/spacecraft2.png");
  sc3Img = loadImage("images/spacecraft3.png");
  sc4Img = loadImage("images/spacecraft4.png");


}

function setup() {
  createCanvas(800,600);
  spacebg = createSprite(400,300,800,600);
  spacebg.addImage(spacebgImg);
  spacebg.scale = 1.7;
  
  iss = createSprite(400, 300, 50, 50);
  iss.addImage(issImg);
  iss.scale = 0.8;

  sc1 = createSprite(400,500,50,50)
  sc1.addImage(sc1Img);
  sc1.scale = 0.2;



}

function draw() {
  background(255,255,255);  
  drawSprites();

  if(!hasDocked){
    
  }

  if(keyDown("left")){
    sc1.velocityX = -1;
    sc1.addImage(sc3Img);
  }

  if(keyDown("right")){
    sc1.velocityX = +1;
    sc1.addImage(sc4Img);
  }

  if(keyDown("down")){
    sc1.velocityY = +1;
    sc1.addImage(sc2Img);
  }
}