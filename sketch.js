const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground;
var log1,pig1,box2; 
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,300,50,50);
    box2 = new Box(900,300,50,50);
    pig1=new pig(800,300,50,50);
    log1=new log(800,250,300,PI/2);
    box3 = new Box(700,200,50,50);
    box4 = new Box(900,200,50,50);
    pig2=new pig(800,200,50,50);
    log2=new log(800,180,300,PI/2);
    box5=new Box(800,160,50,50);
    log3=new log(750,120,150,PI/7);
    log4=new log(850,120,150,-PI/7);
    bird=new Bird(100,100,30,30);
    ground=new Ground(200,height,2000,20); 


}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
    ground.display();
   
}