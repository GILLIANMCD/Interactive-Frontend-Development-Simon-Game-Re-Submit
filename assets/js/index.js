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

// Audio for Game Buttons 
let greenSound = new Audio ("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
let redSound = new Audio ("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
let yellowSound = new Audio ("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
let blueSound = new Audio ("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");

//Game Buttons
const onOffButton = document.getElementById("switch");
const strictButton = document.getElementById("strict");
const startButton = document.getElementById("start");
const score = document.getElementById("score");
const greenQuad = document.getElementsByClassName("green");
const redQuad = document.getElementsByClassName("red");
const blueQuad = document.getElementsByClassName("blue");
const yellowQuad = document.getElementsByClassName("yellow");

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
     flashColor();
     console.log("strict true")
     }else {
         strict = false;
        console.log("strict false");
     }
 });

 // Play the Game only if onOffButton  is true otherwise alert the player on button is not clicked
$(startButton).on('click', function() {
    if (on || win) {
        play();
        console.log("start true")
    } else {
        on = false;
        alert("Please Turn the Game on to Play")
    }
});

function play() {
    win = false;
    order = [];
    playerOrder = [];
    flash = 0;
    intervalId = 0;
    turn = 1;
    score.innerHTML = 1;
    good = true;
    for (var i = 0; i < 20; i++) {
      order.push(Math.floor(Math.random() * 4) + 1);
    }
    console.log(order);
    compTurn = true;
  
  }



// Active and inActive Colors 
function clearColor() {
    $(green).removeClass("green-active");
    $(red).removeClass("red-active");
    $(yellow).removeClass("yellow-active");
    $(blue).removeClass("blue-active");
}

function flashColor () {
    $(green).addClass("green-active");
    $(red).addClass("red-active");
    $(yellow).addClass("yellow-active");
    $(blue).addClass("blue-active");

}



