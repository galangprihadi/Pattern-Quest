////////////////////////////////////////////=========================
///////////////////////////////////////////     GAME INITIALIZATION
//////////////////////////////////////////===========================

const game = new GameEngine({
    numOfQuestions: 3,
    patternPaths: [
        "images/patterns/patA1.png",
        "images/patterns/patA2.png",
        "images/patterns/patA3.png",
        "images/patterns/patA4.png",
        "images/patterns/patA5.png",
        "images/patterns/patA6.png",
        "images/patterns/patA7.png",
        "images/patterns/patA8.png",
        "images/patterns/patA9.png",
        "images/patterns/patA10.png",
        "images/patterns/patA11.png",
        "images/patterns/patA12.png"
    ]
});

//Start Game Panel
const layerStart = document.querySelector(".layer-start");



////////////////////////////////////////////=========================
///////////////////////////////////////////          MAIN FUNCTIONS
//////////////////////////////////////////===========================

document.addEventListener('DOMContentLoaded', () => {

    if (localStorage.getItem("minDistance") == null && localStorage.getItem("minDistance") == null) {
        const warningText = document.createElement("span");
        warningText.textContent = "You need to calibrate the Screen Tag first!";
        layerStart.prepend(warningText);

        btnStart.textContent = "CALIBRATE";
    }
});

// Button Start Game
const btnStart = document.getElementById("btnStart");
btnStart.addEventListener("click", () => {
    if (localStorage.getItem("minDistance") !== null && localStorage.getItem("minDistance") !== null) {

        // Hide Start Panel
        layerStart.style.display = "none";

        // Start Game (Game Loop)
        setTimeout(() => {
            game.gameLoop();
        }, 1000);
    }
    else {
        window.location.href = "calibration.html";
    }
});

// Button Play Again
const btnPlayAgain = document.getElementById("btnPlayAgain");
btnPlayAgain.addEventListener("click", () => {
    //this.question.reload();
    //this.gameRunning = true;

    game.question.reload();
    game.gameRunning = true;
    layerStart.style.display = "flex";
    game.eGameOverPanel.style.display = "none";
});