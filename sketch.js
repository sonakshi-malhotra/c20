function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 50);
  fixedRect = createSprite(300, 100, 40, 40);
  movingRect.shapeColor="yellow"
  fixedRect.shapeColor="green"
}

function draw() {
  background(0,0,00);
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2&&
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2&&
    movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2&&
    fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
      movingRect.shapeColor="red"
      fixedRect.shapeColor="blue"
    }  
    else{
      movingRect.shapeColor="pink"
      fixedRect.shapeColor="orange"
    }
  drawSprites();
}