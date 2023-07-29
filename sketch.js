var ball, ground, left_side, right_side;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	
	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
    ball = Matter.Bodies.circle(260, 100, 20, ball_options);
	World.add(world, ball)
	ground = new Ground(width/2, 670, width, 20)
	left_side = new Ground(1100, 600, 20, 120)
	right_side = new Ground(1350, 600, 20, 120)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x, ball.position.y, 40, 40);
  ground.display();
  left_side.display();
  right_side.display();
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, ball.position, {x: 85, y: -85})
	}
}



