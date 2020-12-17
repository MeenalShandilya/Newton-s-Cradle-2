class Ball{
    constructor(x,y,color) {
        var options={
            'restitution':1,
            'density':0.8
        }
        this.body=Bodies.circle(x,y,20,options);
        this.radius=20;
        this.colour=color;
        World.add(world,this.body);
    }
    display() {
        var pos= this.body.position;
        push ();
        fill(this.colour);
        noStroke();
       // stroke ("white");
       // strokeWeight(4);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius);
        pop ();
    }
}