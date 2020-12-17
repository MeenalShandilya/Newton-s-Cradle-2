
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bgImage;

function preload() {
  bgImage = loadImage("bg.png");
}
function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

ball1 = new Ball(400,400,"blue");
ball2 = new Ball(360,400,"red");
ball3 = new Ball(320,400,"#FFD700");
ball4 = new Ball(440,400,"rgb(192, 192, 192)");
ball5 = new Ball(480,400,"#008080");

chain1 = new Chain({x:400,y:200},ball1.body);
chain2 = new Chain({x:360,y:200},ball2.body);
chain3 = new Chain({x:320,y:200},ball3.body);
chain4 = new Chain({x:440,y:200},ball4.body);
chain5 = new Chain({x:480,y:200},ball5.body);

nail1 = new Nail(400,200);
nail2 = new Nail(360,200);
nail3 = new Nail(320,200);
nail4 = new Nail(440,200);
nail5 = new Nail(480,200);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgImage);

  textFont("Candara");
  textStyle(BOLD);
  textSize(50);
  fill("green");
  text("NEWTON'S CRADLE",200,70);
  
  fill("yellow");
  textFont("Comic Sans MS");
  textSize(20);
  textStyle(ITALIC);
  text("Drag the yellow ball and release it to see the working of the Newton's Cradle.",30,120);

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  nail1.display();
  nail2.display();
  nail3.display();
  nail4.display();
  nail5.display();

  drawSprites();
 
}
function mouseDragged() {
  Matter.Body.setPosition(ball3.body,{x:mouseX,y:mouseY});
}