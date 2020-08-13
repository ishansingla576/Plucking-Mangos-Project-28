class SlingShot{
    constructor(BodyA, pointB){
        var options = {
            bodyA: BodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
           
            
        }
        
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA = body;
    }
    display(){
       
        
        if(this.sling.bodyA){
            push();
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(3);
            line(pointA.x,pointA.y,pointB.x,pointB.y); 
            pop();
        }
    }
    
}