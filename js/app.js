//Vars
var button = document.getElementById('popup-card');
var mainText = document.getElementById('main-text');
var locationBtn = document.getElementById('locationBtn');
var locationCard = document.getElementById('location-card');
var contactBtn = document.getElementById('contactBtn');
let card = document.getElementById('contact-card');
locationCard.style.visibility = 'hidden';
card.style.visibility = 'hidden';
mainText.style.visibility = 'hidden';

//When button1 is pressed, buttonValue becomes true.
function showPage() {
    button.style.visibility = 'hidden';
    mainText.style.visibility = 'visible';
}

//When button2 is pressed, send user back to google.
function exit () {
    window.location.href="http://www.google.com";
}

//When location button is pressed, show location card.
function showCard() {
    mainText.style.visibility = 'hidden';
    locationCard.style.visibility = 'visible';
}

function closeCard() {
    locationCard.style.visibility = 'hidden';
    mainText.style.visibility = 'visible';
}

function contactCard () {
    mainText.style.visibility = 'hidden';
    card.style.visibility = 'visible';
}

function closeContactCard () {
    card.style.visibility = 'hidden';
    mainText.style.visibility = 'visible';
}




