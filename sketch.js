const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber,rubber1,rubber2,rubber3,rubber4,rubber5,rubber6,rubber7,rubber8,rubber9,rubber10,rubber11,rubber12;
var plane;
var box;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    plane = new Plane(600,height,1200,20)
    stone = new Stone(660,300,80,80);
    hammer = new Hammer(10,100);
    iron = new Iron(440,300,60,80);
    rubber = new Rubber(530,300,100);
    rubber1 = new SRubber(540,300,10);
    rubber2 = new SRubber(550,300,10);
    rubber3 = new SRubber(560,300,10);
    rubber4 = new SRubber(570,300,10);
    rubber5 = new SRubber(580,300,10);
    rubber6 = new SRubber(590,300,10);
    rubber7 = new SRubber(610,300,10);
    rubber8 = new SRubber(610,300,10);
    rubber9 = new SRubber(620,300,10);
    rubber10 = new SRubber(630,300,10);
    rubber11 = new SRubber(640,300,10);
    rubber12 = new SRubber(650,300,10);
    


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();
    rubber6.display();
    rubber7.display();
    rubber8.display();
    rubber9.display();
    rubber10.display();
    rubber11.display();
    rubber12.display();
    stone.display();
    iron.display();

    
 
}