//ARIANA: fALTOU COLOCAR O ARQUIVO pARTICLE.JS NO INDEX.HTML

var Engine = Matter.Engine,
World = Matter.World,
Events = Matter.Events,
Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight= 300;
var score = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //criar objetos de divisão
  for (var k = 0; k <=width; k=k+80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //crie a 1ª linha de objetos plinko
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //crie a 2ª linha de objetos plinko
  for (var j = 50; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,175));
  }

  //crie a 3ª linha de objetos plinko
  for (var j = 75; j <=width; j=j+50){
    plinkos.push(new Plinko(j,275));
  }

  //crie a 4ª linha de objetos plinko
  for (var j = 50; j<=width - 10; j=j+50){
    plinkos.push(new Plinko(j,375));
  }

  //criar objetos de partículas
}

 //ARIANA: ERRO NO FUNCTION DRAW

 function draw() {
  background("black");
  textSize(35);
  text("Score:" +score, 20, 40);
  fill("white");

  textSize(35);
  text("500",5,550);
  text("500",80,550);
  text("500",160,550);
  text("500",240,550);
  text("100",320,550);
  text("100",400,550);
  text("100",480,550);
  text("200",560,550);
  text("200",640,550);
  text("200",720,550);

  Engine.update(engine);
  ground.display();
  
  //exibir os plinkos
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }

  if(frameCount%60 === 0){
    particles.push(new Particle(random(width/2-30,width/2+30),10,10));
    score++;
  }

  //exibir as partículas
  //ARIANA: erro na hora de escrever length
  //for (var j = 0; j < particles.lenght; j++) {
  //particles[j].display();
  //}

  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }

  //exibir os divisões
   for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
}

function mousePressed(){
  if(gameState !== "end"){
    count++;
    ball = new Ball(mouseX, 10, 10, 10);
  }
}