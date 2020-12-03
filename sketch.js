const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var bground,tground,lground,rground,Ground;
var d1,d2,d3,d4,d5,d6,d7;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup(){
  var canvas = createCanvas(515,800);
  engine = Engine.create();
  world = engine.world;

  bground = new ground(width/2,800,width,10);
  tground = new ground(width/2,0,width+20,10);
  lground = new ground(0,height/2,10,height);
  rground = new ground(515,height/2,10,height);

  Ground = new ground(width/2,792,width,10);

  d1 = new Divisions(5,650,10,divisionHeight);
  d2 = new Divisions(85,650,10,divisionHeight);
  d3 = new Divisions(170,650,10,divisionHeight);
  d4 = new Divisions(255,650,10,divisionHeight);
  d5 = new Divisions(340,650,10,divisionHeight);
  d6 = new Divisions(425,650,10,divisionHeight);
  d7 = new Divisions(510,650,10,divisionHeight);

}

function draw(){
  background(0);
  Engine.update(engine);

  d1.display();
  d2.display();
  d3.display();
  d4.display();
  d5.display();
  d6.display();
  d7.display();

  stroke("black");
  fill(255,255,255);
  Ground.display();
  fill("brown");
  bground.display();
  tground.display();
  lground.display();
  rground.display();

  for(var p = 40; p<=width; p=p+50){
    plinkos.push(new Plinkos(p,75,10));
  }

  //for(var p = 0; p<Plinkos.length; p=p++){
    //plinkos[p].display();
  //}

  if(frameCount%60===0){
    particles.push(new Particles(random(width/2-10 , width/2+10), 10 ,10))
  }

  //for(var p = 0; p<Particles.length; p=p++){
    //particles[p].display();
  //}


   
}
