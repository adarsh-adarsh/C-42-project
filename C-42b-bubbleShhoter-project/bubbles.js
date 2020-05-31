class Bubbles
{
  constructor()
  {
    this.body = Bodies.ellipse;
  }

  display()
  {
    if (World.frameCount % 60 === 0) 
    {
      var bubbles = createSprite(400,320,40,10);
      bubbles.x = randomNumber(0,400);
      bubbles.addImage("bubbles",bubblesImage);
      bubbles.scale = 0.5;
      bubbles.velocityX = -3;
      bubblesGroup.add(bubbles);
    }
  }
}
