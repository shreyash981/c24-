class Paper {
constructor( x , y ,radius ){
  var options={
restitution:0.3 , 
isStatic:false 
  }


this.radius = radius ; 
this.x = x ;
this.y = y ;
this.body = Bodies.circle(this.x , this.y,this.radius, options) ;
World.add( world, this.body);
} 
display(){
    var pos =this.body.position;
    var angle = this.body.angle ;

   push();
  translate(pos.x , pos.y);
    rotate(angle) ; 
    ellipseMode(CENTER);
    fill(255);
    circle(0, 0, this.radius );
    pop();
  }






}