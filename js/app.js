//initial vars and settings on page load
var agePopup = document.getElementById("age-popup");
var mainText = document.getElementById("main");
agePopup.style.visibility = 'visible';
mainText.style.visibility = 'hidden';

//makes the user leave the page to google
function leaveSite () {
    window.location.href = "https://www.google.com/";
}

//shows main page and hides age popup
function showPage () {
    agePopup.style.visibility = 'hidden';
    mainText.style.visibility = 'visible';
}