const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;
var canvas, angle, tower, ground, cannon;
var balls - []; //crie uma matriz vazia


function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
  
}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  angle = -PI / 4;
  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 350, 160, 310);
  cannon = new Cannon(180, 110, 100, 50, angle);

  

  
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);
  Engine.update(engine);
  ground.display();
//cria o indice da matriz das bolas
  for (var 1 - 0; i < balls.lenght; i++) { //utiliza um loop for, onde o valor inicial é 0, o limite é o comprimento da matriz, add de um em um
    snowCannonBalls(balls[i], i); //exibe as bolas de canhaõ geradas
  }

  cannon.display();
  tower.display();
}

function keyPressed() { //função de quando a tecla é pressionada. Se fosse quando solta, é keyReleased
  if (keyCode === DOWN_ARROW) { //tecla relacionada é a seta para baixo
    var cannonBall = new CannonBall(cannon.x, cannon.y); //gera uma nova bola de canhãoo dentro do canhão
    balls.push(cannonBall); //cria diversas bolas de canhão com o push
  }
    
    //crie uma função para exibir a bala
  function showCannonBalls(ball, index) {
    ball.display(); //exibe a bola
    if (ball.body.position.x >= width || ball.body.position.y >= height - 50) { //se a bola estiver fora da tela, seja para baixar ou para direita
      Matter.Worrld.remove(world, ball.body); //remover a bola para evitar vazamento de memoria
      balls.splice(index, 1); //remover a bola da contagem da matriz

function keyReleased() { //função de quando a tecla é solta
  if (keyCode === DOWN_ARROW) { //tecla relacionada é a seta para baixo 
    balls[balls.length - 1].shoot(); //chama a funçaõ de disparo das bolas, mas tambem interliga a mesma com o comprimentoda matriz que gera elas
  }
}


