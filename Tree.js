class Tree{
    constructor(x,y,radius, width, height){
        var options={
            isStatic:false,
            restitution:0,
            density:1.2,
            friction:1
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image = loadImage("images/Tree.png")
        
        World.add(world, this.body);
    }
    display(){
    var pos =this.body.position;
    ellipseMode(CENTER);
    ellipse(pos.x, pos.y, this.radius, this.radius);
    Tree.display()
    }
    }
    