// Variables
let order = []; 
let playerOrder = []; 
let flash;
let turn;
let good;
let compTurn;
let intervalId;
let strict = false;
let noise = true;
let on = false;
let win;

//Game Buttons
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
        strict = false;
        score.innerHTML = "";
        clearInterval(intervalId);
    }
});

/*Turns Strict Mode ON/OFF*/

$(strictButton).on("click", function() {
    if (strictButton.checked == true) {
     strict = true;
     console.log("strict true")
     }else {
         strict = false;
        console.log("strict false");
     }
 });

 // Play the Game only if onOffButton  is true otherwise alert the player on button is not clicked
$(startButton).on('click', function() {
    if (on || win) {
        clearInterval(intervalId);
        play();
        console.log("start true")
    } else {
        on = false;
        alert("Please Turn the Game on to Play")
    }
});

function play () {
    win = false;
    order = [];
    flash = 0;
    turn = 1;
    score.innerHTML = 1;
    good = true;
    for (var i = 0; i < 20; i++ ) {
        order.push(Math.floor(Math.random() * 4) + 1);
    }
    console.log(order)
    compTurn = true;
 }




