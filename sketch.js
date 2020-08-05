const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var stone;

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
  background("blue");
  
  //Engine.update(engine);

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

  //drawSprites();
}

function mouseDragged () {
  Matter.Body.setPosition(stone.body,{x: mouseX, y: mouseY});
}

function mouseReleased () {
  launcher.fly();
}