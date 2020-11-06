var fixedRect, movingRect;


function setup() {
  createCanvas(800,400);
  
  fixedRect = createSprite(400, 200, 50, 50);

  fixedRect.shapeColor = "green"

  movingRect = createSprite(400, 200, 50, 50);

  movingRect.shapeColor = "blue"

}

function draw() {
  
  background(0,0,0);
  
  movingRect.x = mouseX

  movingRect.y = mouseY

  var maxDistanceX = fixedRect.width/2 + movingRect.width/2

  var maxDistanceY = fixedRect.height/2 + movingRect.height/2
  
  var distanceFromLeft = fixedRect.x - movingRect.x

  var distanceFromRight = movingRect.x - fixedRect.x

  var distanceFromTop = fixedRect.y - movingRect.y

  var distanceFromBottom = movingRect.y - fixedRect.y


  if(distanceFromLeft<maxDistanceX && distanceFromRight<maxDistanceX && distanceFromTop<maxDistanceY && distanceFromBottom<maxDistanceY){

    fixedRect.shapeColor = "red"
    movingRect.shapeColor = "red"

  }

  else{

    fixedRect.shapeColor = "green"

    movingRect.shapeColor = "blue"

  }
  
  drawSprites();
}