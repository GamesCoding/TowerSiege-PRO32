class Ball {

    constructor (x,y,r) {
        var options = {
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.r=r;
        this.x=x;
        this.y=y;
        this.body=Bodies.circle(this.x,this.y,this.r/2,options)

        World.add(world,this.body);
    }
    display(){

        //this.body.position.x = mouseX;
        //this.body.position.y = mouseY;

        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("yellow");
        circle(0,0,this.r,this.r);
        pop();
    }
}