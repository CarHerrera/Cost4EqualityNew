var slideIndex =1;
var slideNum = 0;
var slides = document.getElementsByClassName("mySlides");//sets slides = to mySlides in html doc
var dots = document.getElementsByClassName("dot");
var slidePrev = document.querySelector(".prev");
var slideNext = document.querySelector(".next");

window.onload = function() {
  autoSlide();
  showSlides(slideIndex);
  init();
};


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  if (n > slides.length) {slideIndex = 1}// if slideshow goes over it's limit, resets to one
  if (n < 1) {slideIndex = slides.length}//if slideshow goes under it's min, resets to the max
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
function reset(){
  dots[0].className += " active" ;
  dots[slideIndex - 1].classList.remove("active");
  slideIndex=1;
  slideNum=0;
  autoSlide();
}

function autoSlide(){
  var i;
    if (slideIndex >=2){
      console.log("Slide Number = "+ slideNum);
      console.log("Slide Index = " + slideIndex);
      setTimeout(reset, 15000);
    return;
  }
   slideNum++;
   for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
   }
   for (i = 0; i < dots.length; i++) {
       dots[i].className = dots[i].className.replace(" active", "");
   }
   if (slideNum > slides.length) {slideNum = 1}//resets the slideshow
   slides[slideNum-1].style.display = "block";
   dots[slideNum-1].className += " active";
   setTimeout(autoSlide, 5000);//let's slides
}

function init(){
  //Set up event listeners for slideshow
  [slidePrev , slideNext].forEach(function (slideShowButton){
    slideShowButton.addEventListener("click", function (e) {
      if(e.currentTarget.classList.contains("prev")){
        plusSlides(-1);
      }
      else{
        plusSlides(1);
      }
    });
  });
}
