//Page display controls
//initial vars and settings
var agePopup = document.getElementById("age-popup");
var mainText = document.getElementById("main");
// agePopup.style.display = 'initial';
// mainText.style.display = 'none';

//makes the user leave the page to google
function leaveSite () {
    window.location.href = "https://www.google.com/";
}

//shows main page and hides age popup
function showPage () {
    agePopup.style.display = 'none';
    mainText.style.display = 'initial';
}


//Slider controls
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}