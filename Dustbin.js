class Dustbin{
 constructor(x,y){
  

    var options={
   isStatic:true

    }
this.x=x
this.y=y
this.width=200
this.height=100
this.thickness=20
this.angle=0
this.leftbody=Bodies.rectangle(this.x-this.width/2,this.y-this.height/2,this.thickness,this.height,options)
this.bottombody=Bodies.rectangle(this.x,this.y,this.width,this.thickness,this.height,options)
this.rightbody=Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.thickness,this.height,options)
Matter.Body.setAngle(this.leftbody,this.angle)
Matter.Body.setAngle(this.rightbody,-1*this.angle)
World.add(world,this.leftbody)
World.add(world,this.bottombody)
World.add(world,this.rightbody)
 }
display(){
    var posbottom=this.bottombody.position
    var posleft=this.leftbody.position
    var posright=this.rightbody.position
    push()
    translate(posleft.x,posleft.y)
    rectMode(CENTER)
    angleMode(RADIANS)
    fill("black")
    stroke("grey")
    rotate(this.angle)
    rect(0,0,this.thickness,this.height)
    pop()

    push()
    translate(posright.x,posright.y)
    rectMode(CENTER)
    angleMode(RADIANS)
    fill("black")
    stroke("grey")
    rotate(-1*this.angle)
    rect(0,0,this.thickness,this.height)
    pop()

    push()
    translate(posbottom.x,posbottom.y)
    rectMode(CENTER)
    angleMode(RADIANS)
    fill("black")
    stroke("grey")
    rect(0,0,this.width,this.thickness)
    pop()
    }
}



