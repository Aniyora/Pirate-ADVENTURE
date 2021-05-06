const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,player,game;
var canvas, backgroundImage;
var score=0;


var gameState = 0;


function preload(){
 bg=loadImage("images/backgroudImg.jpeg");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  engine = Engine.create();
  world = engine.world;

  ship = new Ship(100,200);
  monster = new Monster(1400, 200);

  
}


function draw(){
  background(bg);
  textSize(35);
  fill("black");
  text("Score" + score, width-300, 50);
  Engine.update(engine);

  ship.display();
  monster.display();

 
}
/*
function mouseDragged(){
  Matter.Body.setPosition(ship.body,{x:mouseX, y:mouseY})
}*/
