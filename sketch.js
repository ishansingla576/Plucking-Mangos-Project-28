const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bgImg,tree,treeImg,boy,boyImg;
function preload()
{
	bgImg = loadImage("Sprites/bg.png");
	treeImg = loadImage("Sprites/Tree.png");
	boyImg = loadImage("Sprites/Boy.png")
}

function setup() {
	displayHeight = displayHeight-150;
	createCanvas(displayWidth, displayHeight);
	tree = createSprite(displayWidth/2+300,displayHeight/2+50);
	tree.addImage(treeImg);
	tree.scale=0.85;

	boy = createSprite(200,490);
	boy.addImage(boyImg);
	boy.scale=0.7;
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(displayWidth/2,displayHeight-20,displayWidth+100,20);
	mango1 = new Mango(900,275,65,65);
	mango2 = new Mango(1000,275,65,65);
	mango3 = new Mango(1100,275,65,65);
	mango4 = new Mango(950,300,65,65);
	mango5 = new Mango(1050,350,65,65);
	stone = new Stone(135,415,35,35);
	sling = new SlingShot(stone.body,{x:135, y:415});
	
	Engine.run(engine);
  
}


function draw() {
	drawSprites();
  rectMode(CENTER);
  background(bgImg);
  drawSprites();
  Engine.update(engine);
 
 // Display all the Objects
 stone.display();
 sling.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();

 detectCollision(mango1,stone);
 detectCollision(mango2,stone);
 detectCollision(mango3,stone);
 detectCollision(mango4,stone);
 detectCollision(mango5,stone);

 
}

function mouseDragged(){
    
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    
	}   
function mouseReleased(){
		//Matter.Body.setStatic(stone.body,false);
		sling.fly();
		
	
	}

function detectCollision(mango,stone){

	var mp = mango.body.position;
	var sp = stone.body.position;

	var distance = dist(sp.x,sp.y,mp.x,mp.y);
	if(distance<=mango.r+stone.r){
		Matter.Body.setStatic(mango.body,false);
	}
}

function keyPressed(){
	if(keyCode=32){
		Matter.Body.setPosition(stone.body,{x:135, y:415});
		sling.attach(stone.body);
	}
}