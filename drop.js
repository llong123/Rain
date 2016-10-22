function Drop(){

        this.x = random(width);       
        this.y = random(-900, -50);
        this.speed = 5;
        
        this.fall = function(){
                this.y += this.speed;
                
                if(this.y > height){
                        this.y = random(-600,-50);
                }
                
        }
        
        this.show = function(){
                stroke(0, 0, 0);
                line(this.x,this.y,this.x,this.y+10);
        }

}