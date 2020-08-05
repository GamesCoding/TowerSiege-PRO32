class Block1 extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    //this.image = loadImage("wood1.png");
  }

  display(){

    super.display();

    var boxPos=this.body.position;

    push();
    translate(boxPos.x, boxPos.y);
    rectMode(CENTER)
    strokeWeight(2);
    fill("lightblue");
    rect(0,0,this.width,this.height);
    pop();
  }

}
