const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var bground,tground,lground,rground,Ground;
var d1,d2,d3,d4,d5,d6,d7;
var p11,p12,p13,p14,p15,p16,p17,p18,p19;
var p21,p22,p23,p24,p25p26,p27,p28,p29,p210;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup(){
  var canvas = createCanvas(500,800);
  engine = Engine.create();
  world = engine.world;

  bground = new ground(width/2,800,width,10);
  tground = new ground(width/2,0,width+20,10);
  lground = new ground(0,height/2,10,height);
  rground = new ground(500,height/2,10,height);

  Ground = new ground(width/2,792,width,10);

  for (var k=10; k<=width; k=k+80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  
  for(var j = 50; j<=width; j=j+50){
    plinkos.push(new Plinkos(j,75));
  }  
  for(var j = 25; j<=width-10; j=j+50){
    plinkos.push(new Plinkos(j,175));
  }
  for(var j = 50; j<=width; j=j+50){
    plinkos.push(new Plinkos(j,275));
  }  
  for(var j = 25; j<=width-10; j=j+50){
    plinkos.push(new Plinkos(j,375));
  }

    if(World.frameCount%10===0){
    particles.push(new Particles(random(width/2-10 , width/2+10),10, 10 ,10))
    }

}

function draw(){
  background(0);
  Engine.update(engine);

  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  for(var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }

  stroke("black");
  fill(255,255,255);
  Ground.display();
  fill("brown");
  bground.display();
  tground.display();
  lground.display();
  rground.display();

  for(var p = 0; p<particles.length; p++){
    particles[p].display();
  }
   
}
