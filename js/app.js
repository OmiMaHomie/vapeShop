//Code initally starts of with only the popup.
let button = document.getElementById('popup-parent');
let mainText = document.getElementById('main-text');
mainText.style.visibility = 'hidden';


//When button1 is pressed, buttonValue becomes true.
document.getElementById('button1').onclick = function () {
    mainText.style.visibility = 'visible';
    button.style.visibility = 'hidden';
}

//When button2 is pressed, send user back to google.
function goTo () {
    window.location.href="http://www.google.com";
}