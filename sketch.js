
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane,block1,block2;
var rotator1,rotator2,rotator3;
var angle1 = 50;
var angle2 = 100;
var angle3 = 150;
var particle1,particle2,particle3,particle4;

function preload(){
	
}

function setup() {
	createCanvas(400, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var plane_options = {
		isStatic : true
	}
     plane = Bodies.rectangle(200,400,410,20,plane_options)
     World.add(world,plane)

     block1 = Bodies.rectangle(100,300,100,15,plane_options)
	 World.add(world,block1)

	 block2 = Bodies.rectangle(300,300,100,15,plane_options)
	 World.add(world,block2)

	 rotator1 = Bodies.rectangle(200,150,150,15,plane_options)
	 World.add(world,rotator1)

   rotator2 = Bodies.rectangle(200,150,150,15,plane_options)
	 World.add(world,rotator2)

   rotator3 = Bodies.rectangle(200,150,150,15,plane_options)
	 World.add(world,rotator3)

	 var ball_options = {
		 restitution:0.1
		 
	 }

	 particle1 = Bodies.circle(180,50,20,ball_options)
	 World.add(world,particle1)

   particle2 = Bodies.circle(190,50,20,ball_options)
	 World.add(world,particle2)

   particle3 = Bodies.circle(200,50,20,ball_options)
	 World.add(world,particle3)

	 particle4 = Bodies.circle(210,50,20,ball_options)
	 World.add(world,particle4)

	 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgreen");
  fill("maroon")
  rect(plane.position.x,plane.position.y,410,20)
  rect(block1.position.x,block1.position.y,100,15)
  rect(block2.position.x,block2.position.y,100,15)
  
  ellipse(particle1.position.x,particle1.position.y,20,20)
  ellipse(particle2.position.x,particle2.position.y,20,20)
  ellipse(particle3.position.x,particle3.position.y,20,20)
  ellipse(particle4.position.x,particle4.position.y,20,20)
  
 


 


 Matter.Body.rotate(rotator1,angle1)
 push()
 translate(rotator1.position.x,rotator1.position.y)
 rotate(angle1)
 rect(0,0,150,15)
 pop()
 angle1 = angle1+40;


 Matter.Body.rotate(rotator2,angle2 )
 push()
 translate(rotator2.position.x,rotator2.position.y)
 rotate(angle2)
 rect(0,0,150,15)
 pop()
 angle2 = angle2+30

 Matter.Body.rotate(rotator3,angle3 )
 push()
 translate(rotator3.position.x,rotator3.position.y)
 rotate(angle3)
 rect(0,0,150,15)
 pop()
 angle3 = angle3+50
  
  drawSprites();
 
}



