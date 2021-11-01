class Ground{

    constructor(x,y,w,h)
    {
        var op={
            isStatic:true
        }

        this.bodies=Bodies.rectangle(x,y,w,h,op);
        World.add(world,this.bodies);
        this.width=w;
        this.height=h;

    }
     display() 
     {
         
        var pos=this.bodies.position
        rectMode(CENTER)
        fill("white");
        rect(pos.x,pos.y,this.width,this.height)

     }
}