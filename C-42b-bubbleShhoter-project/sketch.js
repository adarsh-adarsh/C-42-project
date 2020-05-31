var shooter;
var bullets;
var bulletGroup;
var bubbles;
var bubbleGroup;
var shooterImage;
var bubblesImage;
var bulletsImage;
var score = 0;

function preload()
{
  shooterImage = loadImage("../images/shooter.png");
  bubblesImage = loadImage("../images/bubble.jpg");
  bulletsImage = loadImage("../images/bullet.jpg");
}

function setup()
{
  shooter = createSprite(200,200);
  shooter.addImage("shooterImage",shooterImage);
}

function draw()
{
  canvas(400,400);
  background("black");
  
  if(keyCode(32))
  {
    bullets.release();
  }

  if(keyDown(LEFT_ARROW))
  {
    this.shooter.rotate = -20;
  }

  if(keyDown(RIGHT_ARROW))
  {
    this.shooter.rotate = 20;
  }

  if(bullets.isTouching(bubbles))
  {
    bubbleGroup.desteroyEach();
    bulletGroup.desteroyEach();
    score = score + 10;
  }

  text("YOUR SCORE " + score,250,50);

  drawSprites();
}

function release()
{
  bullets.velocityX = 5;
  bullets.velocityY = 5;
}
