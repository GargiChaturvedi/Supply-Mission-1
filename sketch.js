var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, packageBodyOptions, groundOptions, groundSprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	packageBodyOptions = {
		isStatic: true,
		restitution: 0.7
	}

	groundOptions = {
		isStatic: true
	}

	packageBody = Bodies.circle(width/2, 200, 5, packageBodyOptions);
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , groundOptions);
 	World.add(world, ground);


	Engine.run(engine);

	packageSprite=createSprite(packageBody.position.x, packageBody.position.y, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);  
}


function draw() {
  background(0);
  rectMode(CENTER);

  packageSprite.x = packageBody.position.x; 
  packageSprite.y = packageBody.position.y;

  drawSprites();

  if (keyCode === DOWN_ARROW) {
	Body.setStatic(packageBody, false);
	}
}