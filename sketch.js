var bullet, wall;
var speed,weight,wallThickness,deformation;
var speedUpArrow, speedDownArrow, weightUpArrow, weightDownArrow, thicknessUpArrow, thicknessDownArrow;
var randomButton;


function setup() {
  createCanvas(1400,800);

  bullet = createSprite(200,400,25,25);
  wall = createSprite(1000,400,15,100);

  speedUpArrow = createSprite(525,115,25,25);
  speedDownArrow = createSprite(525,145,25,25);

  weightUpArrow = createSprite(925,115,25,25);
  weightDownArrow = createSprite(925,145,25,25);

  thicknessUpArrow = createSprite(750,215,25,25);
  thicknessDownArrow = createSprite(750,245,25,25);

  randomButton = createSprite(625,50,300,75);
  randomButton.shapeColor = "white";

  speed = 223;
  weight = 30;
  wallThickness = 22;
  deformation = 0;
}

function draw() {
  background(0);
  if(bullet.x == 200){
    bullet.visible = false;
  }else{
    bullet.visible = true;
  }

  if(keyWentDown("space") && bullet.x == 200){
    start();
  }

  if(wall.x - bullet.x <= bullet.width/2 + wall.width/2){
    crash();

    if(keyWentDown("r" || "R")){
      reset();
    }
  }

  if(mouseWentDown(LEFT) && mouseIsOver(speedUpArrow) && speed < 321 && bullet.x == 200){
    speed = speed + 1;
  }

  if(mouseWentDown(LEFT) && mouseIsOver(speedDownArrow) && speed > 223 && bullet.x == 200) {
    speed = speed - 1;
  }


  if(mouseWentDown(LEFT) && mouseIsOver(weightUpArrow) && weight < 52 && bullet.x == 200){
    weight = weight + 1;
  }

  if(mouseWentDown(LEFT) && mouseIsOver(weightDownArrow) && weight > 30 && bullet.x == 200) {
    weight = weight - 1;
  }


  if(mouseWentDown(LEFT) && mouseIsOver(thicknessUpArrow) && wallThickness < 83 && bullet.x == 200){
    wallThickness = wallThickness + 1;
  }

  if(mouseWentDown(LEFT) && mouseIsOver(thicknessDownArrow) && wallThickness > 22 && bullet.x == 200) {
    wallThickness = wallThickness - 1;
  }



  if(mouseWentDown(LEFT) && mouseIsOver(randomButton) && bullet.x == 200) {
    speed = Math.round(random(223,321));
    weight = Math.round(random(30,52));
    wallThickness = Math.round(random(22,83));
  }
  

  drawSprites();

  
  textSize(40);
  fill(255);
  text(speed,425,150);
  text(weight,825,150);
  text(wallThickness,665,250);
  textAlign(CENTER);
  text("Speed:",350,150);
  text("Weight:",750,150);
  text("Thickness:",560,250);

  fill(0);
  text("Random",620,65);

  //create the gun
  fill("grey");
  rect(100,387,75,25);
  rect(95,388,25,60);
}

function start(){
    bullet.velocityX = speed/10;
}

function crash(){
    bullet.velocityX = 0;
    bullet.x = 980;

    deformation = (0.5 * weight * speed * speed) / (wallThickness * wallThickness * wallThickness);

    if(deformation>10){
      bullet.shapeColor = "red";
    }else{
      bullet.shapeColor = "green";
    }
}

function reset(){
    bullet.x = 200;
    deformation = 0;
    bullet.shapeColor = "grey";
    bullet.visible = false;
}