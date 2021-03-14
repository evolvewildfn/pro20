var cat,catImg1, catImg2, catImg3; 
var mouse, mouseImg1, mouseImg2, mouseImg3; 
var bg; 

function preload() {
    //load the images here
    mouseImg1 = loadImage("images/mouse1.png"); 
    mouseImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png"); 
    mouseImg3 = loadImage("images/mouse4.png"); 

    catImg1=loadImage("images/cat1.png")
    catImg2=loadAnimation("images/cat2.png","images/cat3.png");
    catImg3=loadImage("images/cat4.png")
    bg=loadImage("images/garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat = createSprite(870, 600); 
    cat.addAnimation("catOne", catImg1); 
    cat.scale = 0.2; 

    mouse = createSprite(200, 600); 
    mouse.addAnimation("mouseOne", mouseImg1); 
    mouse.scale = 0.2;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if (cat.x - mouse.x < (cat.width - mouse.width)/ 2) {
        cat.velocityX = 0; 
        cat.addAnimation("catThree", catImg3); 
        cat.x = 300; 
        cat.scale = 0.2; 
        cat.changeAnimation("catThree"); 
        mouse.addAnimation("mouseThree", mouseImg3); 
        mouse.scale = 0.15; 
        mouse.changeAnimation("mousThree")
    }

    if (keyDown("left")){
        cat.velocityX = -5; 
        cat.addAnimation("catTwo", catImg2); 
        cat.changeAnimation("catTwo")
  
        mouse.addAnimation("mouseTwo", mouseImg2); 
        mouse.changeAnimation("mouseTwo")
    }
  

    drawSprites();
}

