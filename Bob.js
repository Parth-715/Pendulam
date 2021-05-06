/*class Bob{
constructor(x, y, r){
    var options = { 
        isStatic: false,
        restitution:1,
        friction:0.1,
        density:0.5
    }

    this.x = x; 
    this.y = y; 
    this.r = r; 

    this.body = Bodies.circle(this.x, this.y, this.r, options); 
    World.add(world, this.body)
    
}

    display(){ 

        var bobPos = this.body.position; 

        push(); 
        translate(bobPos.x, bobPos.y)
        rectMode(CENTER); 
        fill ("orange"); 
        ellipse(0, 0, this.r, this.r); 
        pop(); 
        
    }
}*/

class Bob
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:1,
			friction:0,
			density:0.5
			
			}
		this.x=x;
		this.y=y;
		this.r=r
		
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;
			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			//imageMode(CENTER);
			//image(this.image, 0,0,this.r, this.r)
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}

