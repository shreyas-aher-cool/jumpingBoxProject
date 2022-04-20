var canvas;
var music;
var rec1,rec2,rec3,rec4;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    rec1=createSprite(90,550,180,50);
    rec2=createSprite(290,550,180,50);
    rec3=createSprite(490,550,180,50);
    rec4=createSprite(690,550,180,50);

    ball=createSprite(random(20,750),100,40,40);

    rec1.shapeColor='blue';
    rec2.shapeColor='orange';
    rec3.shapeColor='red';
    rec4.shapeColor='green';

    ball.shapeColor="white";
    ball.velocityX=4;
    ball.velocityY=9;


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if(rec1.isTouching(ball)&&ball.bounceOff(rec1)){
        ball.shapeColor='blue';
        music.play()
    }
    if(rec2.isTouching(ball)){
        ball.shapeColor='orange';
        ball.velocityX=0;
        ball.velocityY=0;
        music.stop();
        
    }
    if(rec3.isTouching(ball)&&ball.bounceOff(rec3)){
        ball.shapeColor="red";
      
    }
    if(rec4.isTouching(ball)&&ball.bounceOff(rec4)){
        ball.shapeColor='green';
        
    }
    
    

    drawSprites();



    //add condition to check if box touching surface and make it box
}
