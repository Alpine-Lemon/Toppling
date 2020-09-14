const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var obs1,ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,100,50,50);
    obs1 = new Box(240,100,20,20)
    ground = new Ground(200,390,400,10)

}

function draw(){

    background(0);
    Engine.update(engine);

    box1.display();
    obs1.display();
    ground.display();

}



