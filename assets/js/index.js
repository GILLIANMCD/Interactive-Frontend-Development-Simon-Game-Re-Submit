// Variables
let order = [];
let playerOrder = [];
let flash;
let turn;
let good;
let compTurn
let intervalId;
let strict = false;
let noise = true;
let on = false;
let win;


const onOffButton = document.getElementById("switch");
const strictButton = document.getElementById("strict");
const startButton = document.getElementById("start");
const score = document.getElementById("score");
const green = document.getElementsByClassName("green");
const red = document.getElementsByClassName("red");
const blue = document.getElementsByClassName("blue");
const yellow = document.getElementsByClassName("yellow");

//Event Listeners

//Turn Game on to activate the Score 

onOffButton.addEventListener("click", () => {
   if (onOffButton.checked == true) {
        on = true;
        score.innerHTML ="--";
    } else {
        on = false;
        score.innerHTML = "";
    }
});

$(document).ready(function(){ //jQuery & javaScript when the DOM is ready

/*Turns Strict Mode ON/OFF*/
$(strictButton).on('click', function() {
    if (strict.selected = false)

    $(this).addClass('selected');

    else (strict = false)
    $(this).removeClass('selected')
    });

 
$('#start').on('click', function() {
    $('#start').removeClass('selected');
    $(this).addClass('selected');
});

});