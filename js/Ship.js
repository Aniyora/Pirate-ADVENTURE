class Ship extends BaseClass {
  constructor(x,y){
    super(x,y,125,125);
  this.image = loadImage("images/ship1.png");
  World.add(world, this.body);
  }

  display() {
       
       this.body.position.x=mouseX;
       this.body.position.y=mouseY;
       console.log(mouseX)
        push();
        super.display();
        pop(); 
        
       }  
  
}
