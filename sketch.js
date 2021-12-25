
function preload(){
  //pre-load images
   runnerImg = LoadImage('runner-2png,Runner-1png');
   
   
   powerImg = LoadImage('power.png');
   
   pathImg = LoadImage('path.png');

   energydrinkImg = LoadImage('energyDrink.png');
  
   bombImg = LoadImage('bomb.png');

   coinImg = LoadImage('coin.png');

}




function setup(){
  createCanvas(400,400);  
  path=createSprite(200,200);
  path.addImage("pathImg");
  path.velocityY = 4;
  path.scale=1.2;

  boy=crateSprite(200,200,20,30);
  boy.addImage("runnungImg");

  boundrie1=createSprite(390,0,20,20);
  boundrie1.velocityY = 4;
  
  boundrie2=createSprite(10,0,20,20);
  boundrie2.velocityY = 4;
  


}

function draw() {
  
  if(path.y > 400){
    path.y = hight/2;
  }
   
  if(boundrie1 > 400){
    boundrie1.y = hight/2;
  }
   
  
  if(boundrie2 > 400){
    boundrie2.y = hight/2;
  }
   
  
  
  
  drawSprite();
  
}


 