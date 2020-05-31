class Bullets
{
  constructor()
  {
    this.body = Bodies.rectangle;
  }

  display()
  {
    var bullets = createSprite(200,200);
    bullets.addImage("bulletsImage",bulletsImage);
    bullets.scale = 0.5;
    bullets.velocityX = -3;
    bullets.velocityY = -3;
    bulletsGroup.add(bullets);
  }
}