//Vars
let button = document.getElementById('popup-card');
let mainText = document.getElementById('main-text');
let locationBtn = document.getElementById('locationBtn');
let locationCard = document.getElementById('location-card');
locationCard.style.visibility = 'hidden';
mainText.style.visibility = 'hidden';

//When button1 is pressed, buttonValue becomes true.
function showPage() {
    mainText.style.visibility = 'visible';
    button.style.visibility = 'hidden';
}

//When button2 is pressed, send user back to google.
function exit () {
    window.location.href="http://www.google.com";
}

//When location button is pressed, show location card.
function showCard() {
    locationCard.style.visibility = 'visible';
    mainText.style.visibility = 'hidden';
}

function closeCard() {
    locationCard.style.visibility = 'hidden';
    mainText.style.visibility = 'visible';
}




