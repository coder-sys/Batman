class Rain{
    constructor(x,y){
        this.body = Bodies.circle(x,y,2,2)
        World.add(world,this.body)
    }
    show = function(){
        push()
        translate(this.body.position.x,this.body.position.y)
        ellipseMode(CENTER)
        fill('blue')
        ellipse(0,0,2,2)
        pop()
    }

    
}