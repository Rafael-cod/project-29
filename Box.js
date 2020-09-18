class Box {
  constructor(x, y, width, height) {
    var options = {
        isStatic:false,
        'restitution':0.5,
        'friction':0.5,
        'density':0.5

    }
    this.body = Matter.Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;

    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    fill("white");
    rect(0,0,this.width,this.height);
    pop();
  }
}
