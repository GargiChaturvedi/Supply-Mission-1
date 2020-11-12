//variables declared here
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, packageBodyOptions, groundOptions, groundSprite;
//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	//sprite images loaded here
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	//engine created here
	engine = Engine.create();
	//world added to the engine
	world = engine.world;
	
	//important properties of the packageBody
	packageBodyOptions = {
		isStatic: true,
		restitution: 0.7
	}
	
	//important properties of the ground
	groundOptions = {
		isStatic: true
	}
	
	//packageBody created here
	packageBody = Bodies.circle(width/2, 200, 5, packageBodyOptions);
	World.add(world, packageBody);
	

	//ground created here
	ground = Bodies.rectangle(width/2, 650, width, 10 , groundOptions);
 	World.add(world, ground);

	//starting the engine
	Engine.run(engine);
	
	//body for the packageBody created with this sprite
	packageSprite=createSprite(packageBody.position.x, packageBody.position.y, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;
	
	//extra display items for beautification
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;
	
	//outer covering of the ground body
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);  
}


function draw() {
  background(0);
  rectMode(CENTER);
	
  //the motion of the packageBody is assigned to the packageSprite
  packageSprite.x = packageBody.position.x; 
  packageSprite.y = packageBody.position.y;

  drawSprites();
  
  //when down arrow key is pressed, the packageBody falls down
  if (keyCode === DOWN_ARROW) {
	Body.setStatic(packageBody, false);
	}
}
