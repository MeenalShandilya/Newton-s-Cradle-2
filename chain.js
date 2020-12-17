class Chain{
    constructor(pointA,bodyB) {
        var options={
            pointA: pointA,
            bodyB: bodyB,
            'length':200,
            'stiffness':0.5            
        }
        this.pointA=pointA;
        this.chain=Matter.Constraint.create(options);
        World.add(world,this.chain);
    }
    display() {
        var posA=this.pointA;
        var posB=this.chain.bodyB.position;

        stroke("purple");
        strokeWeight(3);
        line(posA.x,posA.y,posB.x,posB.y);
    }
}