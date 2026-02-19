document.addEventListener("DOMContentLoaded",()=>{
   let reviews=document.querySelectorAll(".review"); 
   let current=0;
   //function creat
   window.showReview=function(index){
    reviews.forEach(R=>R.classList.remove("active"));
    reviews[index].classList.add("active");

   }
   window.nextReview=function(){
    current++;
    if(current>=reviews.length){
        current=0;

    }
    showReview(current);

   }
   window.prevReview=function(){
    current--;
    if(current<0){
        current=reviews.length-1;

    }
    showReview(current);
   }

});