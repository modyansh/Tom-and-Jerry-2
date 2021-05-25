var garden, gardenImg; 
var cat, catImg1, catImg2, catImg3;
var mouse, mouseImg1, mouseImg2, mouseImg3;
var canvas

function preload() {
    //load the images here
    gardenImg=loadImage("garden.png");

    catImg1=loadImage("cat1.png");
    catImg2=loadAnimation("cat2.png","cat3.png");
    catImg3=loadImage("cat4.png");

    mouseImg1=loadImage("mouse1.png");
    mouseImg2=loadAnimation("mouse2.png","mouse3.png");
    mouseImg3=loadImage("mouse4.png");
}

function setup(){
createCanvas(1000,800);
    //create tom and jerry sprites here
garden = createSprite(400,200);
garden.addImage(gardenImg)

cat=createSprite(800,400,50,50)
cat.scale=0.1
cat.addImage(catImg1);
cat.setCollider("rectangle",0,0,cat.width,cat.height);

mouse=createSprite(100,400,50,50)
mouse.scale=0.1
mouse.addImage(mouseImg1);

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

  keyPressed();
  
    if(cat.isTouching(mouse)){
    mouse.addImage("mouseHappy", mouseImg3)
    mouse.changeAnimation("mouseHappy")

    cat.addImage("catHappy", catImg3)
    cat.changeAnimation("catHappy")
    cat.velocityX=0
    }


    drawSprites();
}

function keyPressed(){
if(keyDown(LEFT_ARROW)){
    mouse.addAnimation("mouseTeasing", mouseImg2)
    mouse.changeAnimation("mouseTeasing")

    cat.addAnimation("catMoving", catImg2)
    cat.changeAnimation("catMoving")
    cat.velocityX=-3
}
  //For moving and changing animation write code here

}

function isTouching(object1, object2){ 
    if (object1.x - object2.x < object2.width/2 + object1.width/2 && 
      object2.x - object1.x < object2.width/2 + object1.width/2 && 
      object1.y - object2.y < object2.height/2 + object1.height/2 && 
      object2.y - object2.y < object2.height/2 + object1.height/2) 
      {
        return true; 
      } 
      else{ 
        return false; 
      } 
    }