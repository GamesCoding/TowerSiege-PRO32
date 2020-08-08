const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var stone;
var backgroundColor;

var score = 0;

function preload() {

  getBackgroundColor();
}

function setup() {
  createCanvas(1200,500);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  platform = new Ground(600,400,300,50);

  //ogre layer 1

  layer1Box1 = new Block1(480,350,40,50);
  layer1Box2 = new Block1(520,350,40,50);
  layer1Box3 = new Block1(560,350,40,50);
  layer1Box4 = new Block1(600,350,40,50);
  layer1Box5 = new Block1(640,350,40,50);
  layer1Box6 = new Block1(680,350,40,50);
  layer1Box7 = new Block1(720,350,40,50);

  //ogre layer 2

  layer2Box1 = new Block2(520,300,40,50);
  layer2Box2 = new Block2(560,300,40,50);
  layer2Box3 = new Block2(600,300,40,50);
  layer2Box4 = new Block2(640,300,40,50);
  layer2Box5 = new Block2(680,300,40,50);

  //ogre layer 3

  layer3Box1 = new Block3(560,250,40,50);
  layer3Box2 = new Block3(600,250,40,50);
  layer3Box3 = new Block3(640,250,40,50);

  //the last ogre layer

  layer4Box1 = new Block4(600,200,40,50);

  stone = new Ball(50,200,40);

  launcher = new Launcher(stone.body,{x: 100, y: 200})
}

function draw() {
  
  if(backgroundColor){
  
  background(backgroundColor);
  }
  
  //Engine.update(engine);

  //noStroke();
  textSize(35);
  fill("white")
  text("Score: "+score,750,40);
  

  platform.display();

  stone.display();

  
  layer1Box1.display();
  layer1Box2.display();
  layer1Box3.display();
  layer1Box4.display();
  layer1Box5.display();
  layer1Box6.display();
  layer1Box7.display();

  layer2Box1.display();
  layer2Box2.display();
  layer2Box3.display();
  layer2Box4.display();
  layer2Box5.display();

  layer3Box1.display();
  layer3Box2.display();
  layer3Box3.display();

  layer4Box1.display();

  launcher.display();

  //separation

  layer1Box1.score();
  layer1Box2.score();
  layer1Box3.score();
  layer1Box4.score();
  layer1Box5.score();
  layer1Box6.score();
  layer1Box7.score();

  layer2Box1.score();
  layer2Box2.score();
  layer2Box3.score();
  layer2Box4.score();
  layer2Box5.score();

  layer3Box1.score();
  layer3Box2.score();
  layer3Box3.score();

  layer4Box1.score();

  //drawSprites();
}

function mouseDragged () {
  Matter.Body.setPosition(stone.body,{x: mouseX, y: mouseY});
}

function mouseReleased () {
  launcher.fly();
}

async function getBackgroundColor(){
  var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON= await response.json();

  var datetime= responseJSON.datetime;
  var hour= datetime.slice(11,13);

  //console.log(hour);

  if(hour>=06 && hour<=18){
    bg = "orange";
}
else{
    bg = "blue";
}

//backgroundImg = loadImage(bg);
  backgroundColor=bg;
}