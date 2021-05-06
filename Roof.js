/*class Roof{
    //initialize the object 
    constructor(x, y, width, height){ 

        var options = { 
            isStatic: true
        }

        this.x = x; 
        this.y = y; 
        this.width = width; 
        this.height = height; 

        this.body = Bodies.rectangle(x, y, width, height, options); 
        World.add(world, this.body); 
    }

    //show the object 
    display(){ 

        var roofPos = this.body.position; 

        //add or save settings for a desired object 
        push(); 
        rectMode(CENTER); 
        rect(roofPos.x, roofPos.y, this.width, this.height)
        fill("white")
        //restore the settings 
        pop(); 


''
    }
*/

class Roof
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			rect(0,0,this.w, this.h);
			pop()
			
	}

}

    


