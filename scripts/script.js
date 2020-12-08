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