function setup() {
  createCanvas(800,400);
  movingrectangle=createSprite(400, 200, 80, 30);
  fixedrectangle=createSprite(200,200,50,80)
  movingrectangle.shapeColor='green'
  fixedrectangle.shapeColor='green'
  movingrectangle.debug=true;
  fixedrectangle.debug=true;
  gameobject1=createSprite(100,100,50,50)
  gameobject2=createSprite(200,100,50,50)
  gameobject3=createSprite(300,100,50,50)
  gameobject4=createSprite(400,100,50,50)
  gameobject1.shapeColor='green'
  gameobject2.shapeColor='green'
  gameobject3.shapeColor='green'
  gameobject4.shapeColor='green'
}

function draw() {
  background('black');  
  movingrectangle.x=World.mouseX
  movingrectangle.y=World.mouseY
 if (isTouching(movingrectangle,gameobject4)){
  movingrectangle.shapeColor='red'
  gameobject4.shapeColor='red'
 }
 else {
  movingrectangle.shapeColor='green'
  gameobject4.shapeColor='green'

 }
  drawSprites();
}
