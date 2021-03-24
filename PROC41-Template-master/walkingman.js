function walkingMan(x,y,img){
    this.man = Bodies.rectangle(x,y,100,200,{isStatic:false,mass:45})
    World.add(world,this.man)
    this.img = img
    this.x= x
    this.y = y
    this.show = function(){
        push()
        translate(this.man.position.x,this.man.position.y)
        imageMode(CENTER)
        rotate(this.man.angle)
        image(this.img,0,0,100,200)
        pop()
    }
}