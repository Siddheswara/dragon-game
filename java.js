music= new Audio('music.mp3')

over= new Audio('gameover.wav')

score=0;
cross=true;
document.onkeydown=function(e){
    
    if(e.key=="ArrowUp"){

        dino=document.querySelector('.dino')
        dino.classList.add('animateDino')
        
        setTimeout(() => {
        dino.classList.remove('animateDino')
        }, 700);
    }

     else if(e.key=="ArrowRight"){
        dino=document.querySelector('.dino')
        dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"));
        dino.style.left=dinoX+150+"px"


    }
    else if(e.key=="ArrowLeft"){
        dino=document.querySelector('.dino')
        dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"));
        dino.style.left=(dinoX-150)+"px"
        play();
        

    }

}
setInterval(() => {
    dino=document.querySelector('.dino')
    gameover=document.querySelector('.gameover')
    obstacle=document.querySelector(".obstacle")
    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"))
    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue("top"))
    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue("left"))
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue("top"))
    offsetX=Math.abs(dx-ox)
    offsetY=Math.abs(dy-oy)
    if(offsetX<113 && offsetY<52){

        gameover.style.visibility='visible'
        obstacle.classList.remove('animationObs')

      hell();

        
   
      
    }
    else if(offsetX<100&&cross){
        score+=1
        update(score)
        cross=false;
        setTimeout(() => {
            cross=true;
            
        }, 1000);
        setTimeout(() => {
            anidur=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue("animation-duration"))
            newdur=anidur-0.1
            obstacle.style.animationDuration= newdur +"s"
        }, 500);
    }
}, 10);
function dec(score){
    sc=document.querySelector('.scoreId')
    sc.innerHTML= "your score : " + score; 
}
function update(score){
    sc=document.querySelector('.scoreId')
    sc.innerHTML= "your score : " + score;
}
function hell(){
    over.play()
        setTimeout(() => {
           over.pause() 
           music.pause()
        }, 1000);

}
function play(){
    music.play()
}