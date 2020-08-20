var paper , dustbin1 , ground ,dustbin2,dustbin3 ; 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
 
	createCanvas(800, 700);
//dustbin1 = new Dustbin ( 100,100,100,100) ;
//dustbin2 = new Dustbin ( 150,100,100,100) ;
//dustbin3 = new Dustbin ( 200,100,100,100) ;
paper = new Paper( 50 , 50 , 56);
ground = new Ground(20,222,10,500);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  paper.display();
  drawSprites();
 
}



