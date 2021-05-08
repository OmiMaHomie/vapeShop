//Code initially starts of with only the popup.
let button = document.getElementById('popup-card');
let mainText = document.getElementById('main-text');
//mainText.style.visibility = 'hidden';

//When button1 is pressed, buttonValue becomes true.
function showPage() {
    mainText.style.visibility = 'visible';
    button.style.visibility = 'hidden';
}

//When button2 is pressed, send user back to google.
function exit () {
    window.location.href="http://www.google.com";
}