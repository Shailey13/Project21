
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var left;
var right;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,380,800,10);
	right = new Ground(700,350,10,50);
  	left = new Ground(600,350,10,50);
	//Create the Bodies Here.
	ball = Bodies.circle(100, 20, 10, ball_options);
	World.add(world, ball);

	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	rectMode(CENTER);
  	ellipseMode(RADIUS);

	Engine.run(engine);
  
}


function draw() {
  background(0);
  
  ground.show();
  right.show();
  left.show();

  ellipse(ball.position.x, ball.position.y, 10);

  Engine.update(engine);
  drawSprites();
 
}

function keyPressed(){
	if (keyCode == UP_ARROW){
		Matter.Body.applyForce(ball, {x: 0, y: 0}, {x: 0.002, y: 0});
	}
}

