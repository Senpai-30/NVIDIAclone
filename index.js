let carouselBtn = document.querySelectorAll(".carousel-btn");
let carouselContent = document.querySelectorAll(".carousel-content");

for(var i = 0; i < carouselBtn.length; i++){
  document.querySelectorAll(".carousel-btn")[i].addEventListener("click", function(event){
    if(this.classList.contains("btn-1")){
      document.querySelector(".btn-1").classList.add("carousel-btn-active");
      document.querySelector(".cont-1").classList.add("carousel-content-active");

      document.querySelector(".btn-2").classList.remove("carousel-btn-active");
      document.querySelector(".cont-2").classList.remove("carousel-content-active");

      document.querySelector(".btn-3").classList.remove("carousel-btn-active");
      document.querySelector(".cont-3").classList.remove("carousel-content-active");
    }
    else if(this.classList.contains("btn-2")){
      document.querySelector(".btn-2").classList.add("carousel-btn-active");
      document.querySelector(".cont-2").classList.add("carousel-content-active");

      document.querySelector(".btn-1").classList.remove("carousel-btn-active");
      document.querySelector(".cont-1").classList.remove("carousel-content-active");

      document.querySelector(".btn-3").classList.remove("carousel-btn-active");
      document.querySelector(".cont-3").classList.remove("carousel-content-active");
    }
    else if(this.classList.contains("btn-3")){
      document.querySelector(".btn-3").classList.add("carousel-btn-active");
      document.querySelector(".cont-3").classList.add("carousel-content-active");

      document.querySelector(".btn-1").classList.remove("carousel-btn-active");
      document.querySelector(".cont-1").classList.remove("carousel-content-active");

      document.querySelector(".btn-2").classList.remove("carousel-btn-active");
      document.querySelector(".cont-2").classList.remove("carousel-content-active");

    }
});
}


// function carouselDisplay(){
//   if()
// }
