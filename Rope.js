class Rope{
    constructor(Body1,Body2,offsetX,offsetY){
    this.offsetX=offsetX
    this.offsetY=offsetY
    var options ={
    
    bodyA:Body1,
    bodyB:Body2,
     pointB:{x:this.offsetX,y:this.offsetY}
    
    
    }
    
    this.rope=Constraint.create(options)
    World.add(world,this.rope)
    
    }
    
    display(){
    
    var point1=this.rope.bodyA.position
    var point2=this.rope.bodyB.position
    
    push()
    strokeWeight(4)
    line(point1.x,point1.y,point2.x,point2.y)
    
    
    pop()
    }
    
    
    }
