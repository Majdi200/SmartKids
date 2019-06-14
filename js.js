window.addEventListener("DOMContentLoaded", start);

var gameScore = 0;
var count = 0;
var isClicked = false;
var intervalId;
var scoreId = 0;

function start() {
  var startTheGame = document.querySelector("#restart");
  var startTheGameOverlay = document.querySelector("#restart_overlay");
  startTheGame.addEventListener("click", restartGame);
  startTheGameOverlay.addEventListener("click", restartGame);
  var userInput = document.getElementById("lettreName");
  var valRandom = setEnigme();
  var weClick = document.getElementById("clickToStart");

  console.log(valRandom);
  userInput.addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
      let valueToCheck = userInput.value.toUpperCase().trim();

      if (valRandom === valueToCheck) {
        userInput.value = "";
        gameScore = gameScore + 1;
        yourScore(gameScore);
        changeColor(gameScore);
        valRandom = setEnigme();
        console.log(valRandom);
      } else {
        gameScore = gameScore - 1;
        yourScore(gameScore);
        changeColor(gameScore);
        userInput.value = "";
        valRandom = setEnigme();
        console.log(valRandom);
        console.log(gameScore);
        winOrLose();
        console.log(winOrLose());
      }
    }
  });
}

function winOrLose() {
  if (gameScore > 5 && count < 20) {
    console.log("you win");
  } else if (gameScore < -5 && count < 20) {
    console.log("Bad performance");
  } else if (count === 20) {
    console.log("Game over");
  }
}

function restartGame() {
  isClicked = !isClicked;
  setOverlayStatus("start");
  if (isClicked) {
    chrono();
  } else {
    count = 0;
    clearInterval(intervalId);
    const chr = document.getElementById("chrno");
    chr.innerHTML = "00";
  }

  // alert("Start the Game");
}
function changeColor() {
  scoreId = document.getElementById("myColor");

  if (gameScore === 0) {
    scoreId.style.backgroundColor = "yellow";
  } else if (gameScore > 0) {
    scoreId.style.backgroundColor = "#0BF728";
  } else {
    scoreId.style.backgroundColor = "red";
  }
}

function yourScore(x) {
  document.getElementById("scoring").innerHTML = x;
}

function setEnigme() {
  let enigme = "";
  for (let i = 1; i <= 4; i++) {
    let elem = document.getElementById("rect" + i);
    let char = random_character();
    elem.innerHTML = char;
    enigme += char;
  }
  return enigme
    .split("")
    .sort()
    .join("");
}

function random_character() {
  var chars = "ABCDEFGHIJKLMNOPQURSTUVWXYZ";
  //console.log(chars.substr(Math.floor(Math.random() * 27), 1));
  return chars.substr(Math.floor(Math.random() * 27), 1);
}

var gameIsStarted = false;

function setOverlayStatus(mode) {
  if (mode === "gameover") {
    document.getElementById("overlay").classList.add("is-active");
  } else {
    document.getElementById("overlay").classList.remove("is-active");
  }
}
function winSound() {
  var sound2 = new Audio("./winSound.mp3");
  sound2.play();
}

function PlaySound() {
  var sound = new Audio("./SoundGame.mp3");
  sound.play();
}

function chrono() {
  intervalId = setInterval(() => {
    const chr = document.getElementById("chrno");
    count++; // increment the counter
    chr.innerHTML = count;
    if (count === 20) {
      clearInterval(intervalId);
      if (gameScore > 2) {
        winSound();
      } else {
        setOverlayStatus("gameover");
        PlaySound();
      }
      // alert("GAME OVER");
    }
    // stop the interval
  }, 1000);
}

//   function myFunction() {
//     document.onkeypress.which = 13;
//   }
// }

// Button to start Chreno and game

// function initChrono() {
//   var count = 0;
//   const intervalId = setInterval(() => {
//     const stopChrono = document.getElementById("chrno");
//     // increment the counter
//     stopChrono.innerHTML = count;
//     clearInterval(intervalId); // stop the interval
//   }, 10000);
// }

// function validate(enigme) {
//   let userInput = document.getElementById("lettreName").value;
//   if (userInput === enigme) {
//     console.log("oui");
//   }
// }

//const btnCheck = document.getElementById("submit_result");
//const btnou = document.getElementById("restart");
//var myEnter = document.getElementById("lettreName");
//console.log(enigme);

// function checkResultuser() {
//   if (usesInput == enigme) {
//     console.log(usesInput);
//     console.log(enigme);
//   } else {
//     console.log(false);
//   }
// }

// btnou.onclick = function() {
//   start();
// };

// console.log("document chargé à 100%, on peut commencer...");

// checkResultuser();
