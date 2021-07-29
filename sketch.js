var canvas;
var music;
var base1 ,base2 ,base3, base4,box, invisibleBase1;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
      base1=createSprite(100,590,200,20)
    base1.shapeColor=color(255,0,0);

    base2=createSprite(300,590,200,20)
    base2.shapeColor=color(0,0,225);

    base3=createSprite(500,590,200,20)
    base3.shapeColor=color(0,204,0);

    base4=createSprite(700 ,590,200,20)
    base4.shapeColor=color(255,255,0);

    invisibleBase1=createSprite(400,1,800,10)
invisibleBase1.visible=false;

    //create box sprite and give velocity
box=createSprite(random(20,750));
box.shapeColor=color(255)
box.velocityY=5;
box.scale=0.5;

edges=createEdgeSprites();
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
   if(base1.isTouching(box) && box.bounceOff(base1)){
box.shapeColor="red"
   }
   if(base2.isTouching(box) && box.bounceOff(base2)){
    box.shapeColor="blue"
       }
       if(base3.isTouching(box) && box.bounceOff(base3)){
        box.shapeColor="green"
           }
           if(base4.isTouching(box) && box.bounceOff(base4)){
            box.shapeColor="yellow"
               }
             if(invisibleBase1.isTouching(box)){
              box.bounceOff(invisibleBase1)
             }  
      
drawSprites();



    //add condition to check if box touching surface and make it box
}
