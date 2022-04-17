var photos = Array.from(document.querySelectorAll(".item img"));
var lightBoxContainer = document.getElementById("lightBoxContainer");
var lightBoxItem = document.getElementById("lightBoxItem");
var imgIndex=0; //3lshan yb2a buplick w ast3mlo f ay functiion
var nextBtn=document.getElementById("nextBtn"); 
var pervBtn=document.getElementById("prevBtn");
var closeBtn=document.getElementById("closeBtn");
var surownding=document.getElementById("surr")

for(var i=0 ; i<photos.length ; i++ ){
    photos[i].addEventListener(  "click" , function(e){
        var imgSrc=e.target.getAttribute("src");
         imgIndex=photos.indexOf(e.target);
        lightBoxItem.style.backgroundImage=`url(${imgSrc})`;
        lightBoxContainer.style.display="flex";
    })
}

function nextSlide(){
    imgIndex+=1;
    if(imgIndex==photos.length){
        imgIndex=0;
    }
    var imgSrc=photos[imgIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage=`url(${imgSrc})`;
}
nextBtn.addEventListener("click",nextSlide)
function prevSlide(){
    imgIndex-=1;
    if(imgIndex==-1){
        imgIndex=photos.length -1;
    }
    var imgSrc=photos[imgIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage=`url(${imgSrc})`;
}
function close(){
    lightBoxContainer.style.display="none";}


pervBtn.addEventListener("click",prevSlide);


closeBtn.addEventListener("click",close)
surownding.addEventListener("click",function(){
    lightBoxContainer.style.display="none";
})
document.addEventListener("keydown",function(e){
    if(e.key=="ArrowRight"){//arrow right
        nextSlide()}
        else if(e.key=="ArrowLeft"){// arrow left
            prevSlide()
        }
        else if(e.key=="Escape"){
            close()
        }
            
    })

    //var shiftClicked = false;
    //var dClicked = false;


    //document.addEventListener("keyup",function(h){
        //if(h.key=="Shift"){
//shiftClicked=false;
    //    }
//})
    
//document.addEventListener("keydown",function(d){
    //if(d.key=="Shift"){
//shiftClicked=true;
//}
  //  else if(d.key=="d"){
//dClicked=true;
//}
//})
//if(shiftClicked==true&dClicked==true){
    //window.alert("dfsdfdsfdsfs")

//}

