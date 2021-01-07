//js for typing the first h1

var text = new Array("My name is Samantha van Zandwijk and this is my portfolio"); //the text
var speed = 80; // delay for the typing
var index = 0; // start printing array at this posision
var arrayLength = text[0].length; // the length of the text
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
 
function typewriter() {

 var destination = document.getElementById("typedtext"); //where the text goes
 
 destination.innerHTML = sContents + text[index].substring(0, iTextPos) + "_";
 if ( iTextPos++ === arrayLength ) {
  iTextPos = 0;
  index++;
 } else {
  setTimeout("typewriter()", speed);
 }
}

typewriter();


// js for background color change

var colors = ['rgb(255,255,255)', 'rgb(228, 227, 255)', 'rgb(255, 236, 219)', 'rgb(54, 104, 135)' ];
var body = document.getElementById("body");

window.onscroll = function () {
    console.log(window.scrollY); 
    if (window.scrollY > 0) {
        a = 0;
    }
    if ((window.scrollY > 300 && window.innerHeight < 850) || (window.scrollY > 400 && window.innerHeight < 1300 && window.innerWidth > 1300) || (window.scrollY > 400 && window.innerHeight < 1100) || (window.scrollY > 400 && window.innerHeight < 1400 && window.innerHeight > 1100) || (window.scrollY > 600 && window.innerHeight < 2700)) {
        a = 3;
    }
    if ((window.scrollY > 1600 && window.innerHeight < 850) || (window.scrollY > 1500 && window.innerHeight < 1300 && window.innerWidth > 1300) || (window.scrollY > 2200 && window.innerHeight < 1100) || (window.scrollY > 2539 && window.innerHeight < 1400 && window.innerHeight > 1100) || (window.scrollY > 2500 && window.innerHeight < 2700)) {
        a = 1;
    }
    if ((window.scrollY > 4267 && window.innerHeight < 850) || (window.scrollY > 4100 && window.innerHeight < 1300 && window.innerWidth > 1300) || (window.scrollY > 5200 && window.innerHeight < 1100) || (window.scrollY > 5992 && window.innerHeight < 1400 && window.innerHeight > 1100) || (window.scrollY > 6250 && window.innerHeight < 2700)) {
        a = 3;
    }

    body.style.backgroundColor = colors[a];
};