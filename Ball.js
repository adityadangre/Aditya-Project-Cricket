class Ball extends Baseclass{
    constructor(x,y){
        super(x,y,50,50);
        this.image = loadImage("cball.png");
        this.image.scale=0.1;
    }

    display(){
        super.display();
    }
}