var backG;
var playImg;
var gameState = 0;
var startImg;
var bg2;
var ast1, ast2;
var surface;
var path;
var neil,buzz;
var edges;
var storm;
var exit;
var lives = 20;

function preload(){
    backG = loadImage("backGMarsImg.jpg");
    playImg = loadImage("play.jpg");
    startImg = loadImage("start.jpg");
    bg2 = loadImage("galaxy.jpg");
    ast1 = loadImage("astronaut1.jpg");
    ast2 = loadImage("astronaut2.jpg");
    surface = loadImage("mars surface.jpg");
    path = loadImage("path.jpg");
    storm = loadImage("dust storm.jpg");
    exit = loadImage("gameEnds.jpg");
}


function setup(){
createCanvas(windowWidth,windowHeight);
door = createSprite(displayWidth - 100, 100,50,50);
door.addImage("exit",exit);
door.visible = false;
door.velocityX = -7;
door.scale = 0.2;
dustStorm = createSprite(1080,400,100,100);
dustStorm.addImage("storm",storm);
dustStorm.visible = false;
dustStorm.velocityY = -4;
ds2 = createSprite(200,150,100,100);
ds2.addImage("storm2",storm);
ds2.visible = false;
ds2.velocityY = 4;
neil = createSprite(displayWidth/2,displayHeight/2+100,100,100);
neil.addImage("neil",ast2);
neil.scale = 0.25;
neil.visible = false;
buzz = createSprite(displayWidth/2,displayHeight/2-100,100,100);
buzz.addImage("buzz",ast1);
buzz.scale = 0.25;
wall1 = createSprite(displayWidth/2, displayHeight-150, displayWidth-80, 20);
        wall2 = createSprite(displayWidth/2, 50, displayWidth-80, 20);
        wall3 = createSprite(75,300,20,displayHeight-200);
        wall4 = createSprite(displayWidth -75,300,20,displayHeight-200);
        wall5 = createSprite(575, displayHeight/2 + 120,displayWidth - 490,20);
        wall6 = createSprite(575,displayHeight/2, displayWidth - 280,20);
        wall7 = createSprite(675,displayHeight/4, displayWidth - 300,20);
buzz.visible = false;
wall1.visible = false;
wall2.visible = false;
wall3.visible = false;
wall4.visible = false;
wall5.visible = false;
wall6.visible = false;
wall7.visible = false;
}

function draw (){
    
    background(backG);
    if(gameState===0){
        image(playImg,displayWidth/2-60,displayHeight/5,100,100);
        textSize(30);
        fill("black");
        text("Press SPACE to begin!",displayWidth/2-160,displayHeight/2);
        if(keyDown("SPACE")){
            gameState = 1;
        }
    } 

    if(gameState===1){
        background(backG);    
        textSize(25);
        fill("blue");
        text("Rules: \n  You need to use the arrow keys to jump up and down the Buttes and craters to get to the lander. \n  However, the dust storms and crumbly rocks will do whatever they can to stop you.\n\n Press the 's' key if you dare to take the challenge! and then press 'a'",120,displayHeight/4);
        if(keyDown("s")){
            gameState=2;
        }
    }

    if(gameState===2){
    background(bg2);
    image(startImg,displayWidth/2-120,displayHeight/4,200,200);
    if(keyDown("A")){
        gameState=3;
    }
    }   
    if(gameState===3){
       startImg.isVisible=false;
       background(surface);
       image(ast2,displayWidth/10,50,150,300);
       image(ast1,displayWidth/2+400,50,150,300);
       textSize(36);
       fill("green");
       text("Hi! I'm Neil.",displayWidth/4,180);
       text("Hi! I'm Buzz!",displayWidth/2+150,180);
       fill("cyan");
       textSize(28);
       text(" PROBLEM: \n Neil is an aspiring astronaut person who really, really, wants to land on Mars.\n Everything has been set up, however, while exploring the Martian surface,\n Neil and his friend Buzz, get lost. \n Can YOU help them find their way back without them running out of oxygen? ",displayWidth/10,displayHeight/2);
       textSize(20);
       text("Press 'ENTER' to begin!",displayWidth*0.4,displayHeight/2+200);
       if(keyDown("ENTER")){
           gameState=4;
           
       }
    }

    if(gameState===4){
        background(path);
        neil.visible = true;
        buzz.visible = true;
        edges = createEdgeSprites();
        if(neil.isTouching(edges)){
            neil.bounceOff(edges);
        }
        if(buzz.isTouching(edges)){
            buzz.bounceOff(edges);
        }
        if(keyDown(UP_ARROW)){
            neil.y = neil.y - 10;
        }
        if(keyDown(DOWN_ARROW)){
            neil.y = neil.y + 10;
        }
        if(keyDown(RIGHT_ARROW)){
            neil.x = neil.x+10;
        }
        if(keyDown(LEFT_ARROW)){
            neil.x = neil.x-10;
        }
        if(keyDown("w")){
            buzz.y = buzz.y - 10;
        }
        if(keyDown("s")){
            buzz.y = buzz.y + 10;
        }
        if(keyDown("d")){
            buzz.x = buzz.x+10;
        }
        if(keyDown("a")){
            buzz.x = buzz.x-10;
        }
        
        dustStorm.visible = true;
        ds2.visible = true;
        door.visible = true;
        wall1.visible = true;
        wall2.visible = true;
        wall3.visible = true;
        wall4.visible = true;
        wall5.visible = true;
        wall6.visible = true;
        wall7.visible = true;
        dustStorm.bounceOff(wall1); 
        dustStorm.bounceOff(wall2); 
        dustStorm.bounceOff(wall3); 
        dustStorm.bounceOff(wall4); 
        dustStorm.bounceOff(wall5);
        ds2.bounceOff(wall1); 
        ds2.bounceOff(wall2); 
        ds2.bounceOff(wall3); 
        ds2.bounceOff(wall4); 
        ds2.bounceOff(wall5); 
        door.bounceOff(wall1);         
        door.bounceOff(wall3); 
        door.bounce(dustStorm);
        door.bounce(ds2);
        door.bounceOff(wall2);
        door.bounceOff(wall4);
        door.bounceOff(wall7);
            neil.bounceOff(wall1);
            neil.bounceOff(wall2);       
            neil.bounceOff(wall3);
            neil.bounceOff(wall4);
            neil.bounceOff(wall5);
            neil.bounceOff(wall6);
            neil.bounceOff(wall7);
            buzz.bounceOff(wall1);
            buzz.bounceOff(wall2);
            buzz.bounceOff(wall3);
            buzz.bounceOff(wall4);
            buzz.bounceOff(wall5);
            buzz.bounceOff(wall6);
            buzz.bounceOff(wall7);
            fill("cyan");
            text("You have " + lives+ " lives!",100, 500);
            if(neil.isTouching(dustStorm)||neil.isTouching(ds2)||buzz.isTouching(dustStorm)||buzz.isTouching(ds2)){
                lives = lives-1;
            }
            if(lives<0){
                
                neil.visible = false;
                buzz.visible = false;
                
                dustStorm.visible = false;
                ds2.visible = false;
                door.visible = false;
                wall1.visible = false;
                wall2.visible = false;
                wall3.visible = false;
                wall4.visible = false;
                wall5.visible = false;
                wall6.visible = false;
                wall7.visible = false;
                fill("cyan");
                textSize(30);
                text("GAME OVER!",displayWidth/2-100,displayHeight/2-100);
            }
            if(neil.isTouching(door)&&buzz.isTouching(door)){
                gameState = 6;
                
            }
            if(gameState===6){
                neil.visible = false;
                buzz.visible = false;
                background("backGMarsImg.jpg");
                dustStorm.visible = false;
                ds2.visible = false;
                door.visible = false;
                door.velocityX = 0;
                wall1.visible = false;
                wall2.visible = false;
                wall3.visible = false;
                wall4.visible = false;
                wall5.visible = false;
                wall6.visible = false;
                wall7.visible = false;
                fill("cyan");
                textSize(25);
                text("YOU WIN! \n YOUR TEAMWORK AND LOGIC SKILLS HAVE MADE NEIL AND BUZZ PROUD!",150,displayHeight/2 + 100);
                
            }
            
    }

    drawSprites();
}