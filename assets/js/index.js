// Variables
let on = false;
let strict = false;


const onOff = document.getElementById("switch");
const score = document.getElementById("score");
const strict = document.getElementById("strict");

//Event Listeners
onOff.addEventListener("click", () => {
    if (onOff.checked == true) {
        on = true;
        score.innerHTML ="--";
    } else {
        on = false;
        score.innerHTML = "";
    }
});

strict.addEventListener("click", () => {
   if (strict.checked == true) {
       strict = true;
    } else {
        strict = false;
    }
    });
    