 
 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;
 
 function preload()
 {
	 
 }
 
 function setup() {
	 createCanvas(1500, 700);
 
 
	 engine = Engine.create();
	 world = engine.world;
 
	 //Create the Bodies Here.
     
	 roof = new Roof(750,50,1000,40)

	 bob1 = new Bob (500,350,70) 
	 bob2 = new Bob (600,350,70) 
	 bob3 = new Bob (700,350,70) 
	 bob4 = new Bob (800,350,70) 
	 bob5 = new Bob (900,350,70) 
     
     rope1 = new Rope (bob1.body,roof.body,-bobDiameter*2,0)
	 Engine.run(engine);
   
 }
 
 
 
 function draw() {
   rectMode(CENTER);
   background(125);
   

   roof.display();
   bob1.display();
   bob2.display();
   bob3.display();
   bob4.display();
   bob5.display();
   rope1.display();
   drawSprites();
  
 }
 
 
 
 



