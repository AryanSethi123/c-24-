class pig {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var ae=this.body.angle
      push()
      translate(pos.x,pos.y)  //change in postion
      rotate(ae)               //angle
      rectMode(CENTER);
      fill("pink");
      rect(0, 0, this.width, this.height);
      pop()
    }
  }
  