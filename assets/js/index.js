// Variables
let on = false;

const onOff = document.getElementById("switch");
const score = document.getElementById("score");

//Event Listeners
onOff.addEventListener("click", (turnOn) => {
    if (onOff.checked == true) {
        on = true;
        score.innerHTML ="--";
    } else {
        on = false;
        score.innerHTML = "";

    }
});



// Functions



