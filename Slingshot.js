class Slingshot{
    constructor(x,y,radius, width, height){
        var options={
            isStatic:false,
            restitution:0,
            density:1.2,
            friction:1
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
       // this.image = loadImage("images/stone.png") 
        
        World.add(world, this.body);
  
    }
}