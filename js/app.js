//page display controls
//initial vars and settings
const agePopup = document.getElementById("age-popup");
const contactPopup = document.getElementById("contact-popup");
const locationPopup = document.getElementById("location-popup");
const mainText = document.getElementById("main");
agePopup.style.display = "initial";
contactPopup.style.display = "none";
locationPopup.style.display = "none";
mainText.style.display = "none";

//shows page when users accepts warning
function showPage () {
  agePopup.style.display = "none";
  contactPopup.style.display = "none";
  locationPopup.style.display = "none";
  mainText.style.display = "initial";
}

//shows contact page 
function showContact () {
  mainText.style.display = "none";
  contactPopup.style.display = "initial";
}

//shows location page 
function showLocation () {
  mainText.style.display = "none";
  locationPopup.style.display = "initial";
}

//forces user to google home screen if declines
function leaveSite () {
  window.location.href = "https://www.google.com";
}


//Top slideshow controls
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


//Item slideshow controls
var slideIndex1 = 1;
showSlides1(slideIndex1);

// Next/previous controls
function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}

// Thumbnail image controls
function currentSlide1(n) {
  showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
  var i;
  var slides1 = document.getElementsByClassName("slides1");
  if (n > slides1.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = slides1.length}
  for (i = 0; i < slides1.length; i++) {
      slides1[i].style.display = "none";
  }
  slides1[slideIndex1-1].style.display = "block";
}