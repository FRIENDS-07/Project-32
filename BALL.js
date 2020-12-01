class Ball{

    constructor(){

        this.body = Bodies.circle(100,200,50);
        this.image = loadImage("Pics/polygon.png");
        World.add(world,this.body);

    }

    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,50,50);
    }

}