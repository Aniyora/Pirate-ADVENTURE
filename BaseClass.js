class BaseClass{
    constructor(x,y,width,height){
        var options = {
            'restitution':0.8,
            'friction':1.5,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/ship1.png");
        World.add(world, this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image, 100, 200, this.width, this.height);
    }
}