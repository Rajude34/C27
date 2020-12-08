class Chain {
   
    constructor(bodyA,bodyB){
        var options={
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 0.04,
            length : 10
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }
display(){
    var pointA =  this.chain.bodyA.position
    var pointB =  this.chain.bodyB.position
    strokeWeight(5);
    strokeWeight(5);
    stroke("red")
    line(pointA.x,pointA.y,constrainedLog.body.position.x,constrainedLog.body.position.y)
}


}