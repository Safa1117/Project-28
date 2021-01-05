
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy, boyIMG;
var stone;
var tree;
var ground;
var man1, man2, man3, man4, man5;
var launcher;

function preload()
{
	boyIMG = loadImage("images/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	boy = createSprite(150,650,50,50);
	boy.addImage(boyIMG);
	boy.scale = 0.1

	stone = new Stone(100,600,50,50);

	tree = new Tree(600,530,370,370);

	man1 = new Mango(620, 500, 40);
	man2 = new Mango(540, 480, 40);
	man3 = new Mango(680, 470, 40);
	man4 = new Mango(580, 430, 40);
	man5 = new Mango(630, 430, 40);

	ground = new Ground(400, 695, 900, 20);

	launcher = new Launcher(stone.body,{x: 100, y: 600});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 

  drawSprites();

  stone.display();

  tree.display();

  man1.display();
  man2.display();
  man3.display();
  man4.display();
  man5.display();

  ground.display();

  launcher.display();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
    launcher.fly();
}


function detectCollision1(stone, mango1){
	mango1BodyPosition = mango1.body.setPosition
	stoneBodyPosition = stone.body.setPosition

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mango1BodyPosition.x, mango1BodyPosition.y)
	if(distance<-mango1.r + stone.r){
		Matter.Body.setStatic(mango1.body, false);
	}
}
function detectCollision2(stone, mango2){
	mango2BodyPosition = mango2.body.setPosition
	stoneBodyPosition = stone.body.setPosition

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mango2BodyPosition.x, mango2BodyPosition.y)
	if(distance<-mango2.r + stone.r){
		Matter.Body.setStatic(mango2.body, false);
	}
}
function detectCollision3(stone, mango3){
	mango3BodyPosition = mango3.body.setPosition
	stoneBodyPosition = stone.body.setPosition

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mango3BodyPosition.x, mango3BodyPosition.y)
	if(distance<-mango3.r + stone.r){
		Matter.Body.setStatic(mango3.body, false);
	}
}
function detectCollision4(stone, mango4){
	mango4BodyPosition = mango4.body.setPosition
	stoneBodyPosition = stone.body.setPosition

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mango4BodyPosition.x, mango4BodyPosition.y)
	if(distance<-mango4.r + stone.r){
		Matter.Body.setStatic(mango4.body, false);
	}
}
function detectCollision5(stone, mango5){
	mango5BodyPosition = mango5.body.setPosition
	stoneBodyPosition = stone.body.setPosition

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mango5BodyPosition.x, mango5BodyPosition.y)
	if(distance<-mango5.r + stone.r){
		Matter.Body.setStatic(mango5.body, false);
	}
}
function detectCollision6(stone, mango6){
	mango6BodyPosition = mango6.body.setPosition
	stoneBodyPosition = stone.body.setPosition

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mango6BodyPosition.x, mango6BodyPosition.y)
	if(distance<-mango6.r + stone.r){
		Matter.Body.setStatic(mango6.body, false);
	}
}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body, {x: 235, y:420})
		launcherObject.attach(stone.body)
	}
}



