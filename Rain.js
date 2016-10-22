
var drops = [];

function setup(){
    
    createCanvas(900,600);
    for(var i = 0; i < 500; i++){
        drops[i] = new Drop();
    }
}

function draw(){
    background(255,255,255);
    
    for(var i = 0; i < drops.length; i++){
        
    drops[i].show();
    drops[i].fall();
    }
}