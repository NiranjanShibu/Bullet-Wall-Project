var bullet, wall;
var speed, weight;
var damage;
var thickness;



function setup() {
  createCanvas(800,400);

  speed = random(55, 95);
  weight = random(400, 1500)

  bullet = createSprite(50, 200, 35, 15);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;

  thickness = random(20, 83);
  wall = createSprite(700,200,thickness,height/2);
  wall.depth = bullet.depth;
  bullet.depth = bullet.depth+1;

  //console.log("wall damage"+damage);
  //console.log("speed and weight of bullet" + speed + "," + weight)
}

function draw() {
  background(0,0,0); 

      
    if(checkwallDamage(bullet, wall) > 10){

        wall.shapeColor = color(255,0,0);

      } else {

          wall.shapeColor = color(0,255,0);

      }
 

  drawSprites();
}

