
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render =Matter.Render

var dustbinObject,paperObject,groundObject
var world

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	dustbinObject=new Dustbin(1200,650);
	paperObject=new Paper(200,450,40);
	groundObject=new Ground(width/2,670,width,20);

	



	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });
	
	  Engine.run(engine);
  

	


	Engine.run(engine);


  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbinObject.display();
  paperObject.display();
  groundObject.display();
  drawSprites();
  
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  
	}
}


