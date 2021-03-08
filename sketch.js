const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var bg;
var ball,target;
var constrain;
var ballBodyPosition = 0;
var targetBodyPosition = 0;

function preload(){
    bg = loadImage("bg.jpg")
}

function setup(){
    var canvas = createCanvas(1200,400);

    engine = Engine.create();
    world = engine.world;

    ball = new Ball(1100,200);
    target = new Target(5,200,20,200);
    constrain = new Chain(ball.body,{x:1100,y:200});
}

function draw(){
    background(bg);
    Engine.update(engine);
    console.log(ball.x);

    ball.display();
    target.display();
    constrain.display();

    //detectCollision(ball, target);
   /* if(detectCollision(ball,target)===true){
        textSize(80);
        fill("yellow");
        stroke("black");
        strokeWeight(12);
        text("You Won!",200,100);
    }*/
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    constrain.fly();
}

function keyPressed(){
    if(keyCode === 32){
       constrain.attach(ball.body);
       Matter.Body.setPosition(ball.body,{x:1000,y:200});
    }
}

/*function detectCollision(obj1,obj2){
	ballBodyPosition = obj1.body.position;
	targetBodyPosition = obj2.body.position; 
  
	var distance = dist(targetBodyPosition.x, targetBodyPosition.y, ballBodyPosition.x, ballBodyPosition.y);
	if(distance <= obj2.r + obj1.r){
	  Matter.Body.setStatic(obj2.body, false);
      
	}
  
  }*/