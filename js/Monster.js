class Monster extends BaseClass {
  constructor(x,y)
	{
		super(x,y,60,60);
		this.image=loadImage("images/dragon.png");
		World.add(world, this.body);
		this.Visibility=255;

	}

	score(){
		score++
	}

	display()
	{
			push()
			rectMode(CENTER)
			fill(255,0,255)
			super.display();
			this.VelocityX=-3;
			pop()
			
	}
}
