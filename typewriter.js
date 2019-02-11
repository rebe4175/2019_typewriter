"use strict";

window.addEventListener("DOMContentLoaded", init);

let text;
let counter;
let slicedText;
let textL;
let spaceSound = new Audio("typespace.mp3");
let audio1 = new Audio("typekey1.mp3");
let audio2 = new Audio("typekey2.mp3");
let audioDecider;

function init() {
  
    text = document.getElementById("typewriter").textContent;
    console.log(text);
    counter = 0;
    textL = text.length;
    document.getElementById("typewriter").textContent = "";

   loop();
}

function loop() {

    slicedText = text.slice(0, counter +1);    
    audioDecider = slicedText.slice(counter);
    counter++;

    if (audioDecider == " ") {
       spaceSound.play();
    } else {
       audio1.play();
    }

    document.getElementById("typewriter").textContent = slicedText;

    if (counter != textL) {
        setTimeout(loop, 400);
    } 
}
