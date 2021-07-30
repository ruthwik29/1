var path,boy,boy_walking
var pathimg
var boyimg
var bombimg
var coinimg
var score
var count=0
function preload() {
    pathimg=loadImage("path.png")
        boyimg=loadAnimation("Runner-1.png","Runner-2.png")
    bombimg=loadImage("bomb.png")
    coinimg=loadImage("coin.png")
}
function setup() {
    createCanvas(400,400)
    
    path=createSprite(200,200)
        path.addImage(pathimg)
        path.scale=1.2
        
    boy=createSprite(200,370,5,5)
    boy.addAnimation("boy_running",boyimg) 
    boy.scale=0.05
           
    
}

function draw() {
    background("white")
    bombdisplay()
    coindisplay()
 if(boy.isTouching(bomb)||boy.isTouching(coin)){
     if(boy.isTouching(bomb)){
score=score-1
     }
     if(boy.isTouching(coin)){
         score=score+1
             }
 }  



    

    boy.velocityX=3
        boy.x=World.mouseX
        drawSprites()
        text(count,100,100) 
    }

function bombdisplay(){
    if(frameCount%60==0){
    bomb=createSprite(600,100,40,10)
    bomb.y=Math.round(random(10,100))
    bomb.addImage(bombimg)
    bomb.scale=0.05
    bomb.velocityX=0
    bomb.lifetime=200
    }      
      }
      function coindisplay(){
        if(frameCount%60==0){
        coin=createSprite(600,100,40,10)
        coin.y=Math.round(random(60,100))
        coin.addImage(coinimg)
        coin.scale=0.3
        coin.velocityX=-3
                        coin.lifetime=200
          }
        }