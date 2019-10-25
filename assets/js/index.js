// Variables
let order = []; //random generated sequence
let playerOrder = []; //
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
        clearColor();
        score.innerHTML ="--";
    } else {
        on = false;
        strictButton.checked = false;
        startButton.checked = false;
        score.innerHTML = "";
        clearColor();
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
         strictButton.checked = false;
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
        startButton.checked = false;
        alert("Please Turn the Game on to Play")
    }
});

function play() {
    win = false;
    order = [];
    randomMoves();
    playerOrder = [];
    flash = 0;
    intervalId = 0;
    turn = 1;
    score.innerHTML = 1;
    good = true;
    compTurn = true;
    intervalId = setInterval(compPlay, 800);
    }
//Generates Computer Turn sequence randomly
function randomMoves () {
    for (var i = 0; i < 20; i++) {
        order.push(Math.floor(Math.random() * 4) + 1);
        console.log(order)
      }
}

//compPlay play from freeCodeCamp.org
function compPlay() {
    on = false; // player cannot click buttons when on is = to false
  
    if (flash == turn) {
      clearInterval(intervalId);
      compTurn = false;
      clearColor();
      on = true;
    }
  
    if (compTurn) {
      clearColor();
      setTimeout(() => {
        if (order[flash] == 1) one();
        if (order[flash] == 2) two();
        if (order[flash] == 3) three();
        if (order[flash] == 4) four();
        flash++;
      }, 200);
    }
  }


// Play sound and activate light
function one() {
    greenSound.play();
    $(green).addClass("green-active");
}

function two() {
    redSound.play();
    $(red).addClass("red-active");
}

function three() {
    yellowSound.play();
    $(yellow).addClass("yellow-active");
}

function four() {
    blueSound.play();
    $(blue).addClass("blue-active");
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

$(green).on("click", function(){
    if (on) {
        playerOrder.push(1);
        check();
        one();
    if (!win) {
        setTimeout(() => {
            clearColor();
        }, 300);
    }   
   }
});

$(red).on("click", function(){
    if (on) {
        playerOrder.push(2);
        check();
        two();
    if (!win) {
        setTimeout(() => {
            clearColor();
        }, 300);
    }   
   }
});

$(yellow).on("click", function(){
    if (on) {
        playerOrder.push(3);
        check();
        three();
    if (!win) {
        setTimeout(() => {
            clearColor();
        }, 300);
    }   
   }
});

$(blue).on("click", function(){
    if (on) {
        playerOrder.push(4);
        check();
        four();
    if (!win) {
        setTimeout(() => {
            clearColor();
        }, 300);
    }   
   }
});

//check if playerOrder matches play freecodecamp.org
function check() {
    if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1])
      good = false;
  
    if (playerOrder.length == 20 && good) {
      winGame();
    }
  
    if (good == false) {
      flashColor();
      score.innerHTML = "NO!";
      setTimeout(() => {
       score.innerHTML = turn;
        clearColor();
  
        if (strict) {
          play();
        } else {
          compTurn = true;
          flash = 0;
          playerOrder = [];
          good = true;
          intervalId = setInterval(compPlay, 800);
        }
      }, 800);
  
      noise = false;
    }
  
    if (turn == playerOrder.length && good && !win) {
      turn++;
      playerOrder = [];
      compTurn = true;
      flash = 0;
      score.innerHTML = turn;
      intervalId = setInterval(compPlay, 800);
    }
  
  }
  
  function winGame() {
    flashColor();
    score.innerHTML = "WIN!";
    on = false;
    win = true;
  }

  $("#button").click(function(){
    $('#hide').slideToggle('slow');
});
  