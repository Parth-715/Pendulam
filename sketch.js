
//namespacing 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 

//variables for physics engine 
var world, engine; 

//objects of the game 
var roofObject 

var rope1, rope2, rope3, rope4, rope5; 

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5; 

function setup() {
	createCanvas(1600, 700);
	

	//start your engine and create your world
	engine = Engine.create()
	world = engine.world;

	roofObject = new Roof(800, 200, 800, 50); 
	
	var bobDiameter = 40;

	var startBobPosX = width/2; 
	var startBobPosY = height/4 + 500; 


	bobObject1 = new Bob(startBobPosX - bobDiameter*2, startBobPosY,bobDiameter); 
	bobObject2 = new Bob(startBobPosX - bobDiameter*1, startBobPosY,bobDiameter); 
	bobObject3 = new Bob(startBobPosX, startBobPosY,bobDiameter); 
	bobObject4 = new Bob(startBobPosX + bobDiameter*1, startBobPosY,bobDiameter); 
	bobObject5 = new Bob(startBobPosX + bobDiameter*2, startBobPosY,bobDiameter); 
 
    rope1 = new Rope(bobObject1.body, roofObject.body, -bobDiameter*2, 0);
	rope2 = new Rope(bobObject2.body, roofObject.body, -bobDiameter*1, 0);
	rope3 = new Rope(bobObject3.body, roofObject.body, 0, 0);
	rope4 = new Rope(bobObject4.body, roofObject.body, bobDiameter*1, 0);
	rope5 = new Rope(bobObject5.body, roofObject.body, bobDiameter*2, 0);
	

	

	Engine.run(engine);
	 
  
}


function draw() {
	background("cyan")

	Engine.update(engine)
	roofObject.display(); 
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
	

}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});

	}
}

function drawLine(constraint)
{
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}





