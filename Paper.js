class Paper{
constructor(x,y,radius){

var options={

isStatic:false,
restitution:0.3,
friiction:0.5,
density:1.2

}

this.x=x
this.y=y
this.radius=radius
this.body=Bodies.circle(this.x,this.y,this.radius/2,options)
World.add(world,this.body)


}
display(){

    var pospaper =this.body.position
    push()
    translate(pospaper.x,pospaper.y)
    strokeWeight(12)
    fill("white")
    rectMode(CENTER)
    ellipse(0,0,this.r,this.r)
    pop()
}

}