var box1 ;
var box2 ;

function setup() 
{
  createCanvas(400, 400);

  box1 = new Box(100,50,30,30,2)
  box2 = new Box(100,50,30,30,2)

}

function draw() 
{
  background(220);

  box1.show();
  box1.move();
  box1.bounce();

  box2.show();
  box2.move2();
}

