const seceretValue = parseInt(Math.random() * 100 + 1);
console.log(seceretValue);
const userInput = document.getElementById("userInput");
//console.log(userInput);

const enter = document.getElementById("enter");
const progressBar = document.querySelector(".pcolor");
const grabed = document.getElementById("grabed");
const notGrabed = document.getElementById("notGrabed");
const gif = document.getElementById("gif");
const preEnteredVal = document.getElementById("prevEnteredVal");
let i = 10; //for remaining chance
const remainChances = document.querySelector(".remaningChance");
const startgame = document.getElementById("startGame");

// console.log(progressBar);

// console.log(enter);
let previouslyEnterdValue = "";

enter.addEventListener("click", () => {
  const userValue = userInput.valueAsNumber;

  if (userValue < 1 || userValue > 100) {
    alert("please enter valid input.");
  } else {
    const userValue = userInput.valueAsNumber;
    console.log(userValue);

    //progress bar control
    progressBar.style.width = `${userValue}%`;

    //previous entered input
    previouslyEnterdValue += userValue + " ";
    preEnteredVal.innerText = previouslyEnterdValue;
    //equality

    if (userValue === seceretValue) {
      grabed.style.display = "block";
      notGrabed.style.display = "none";
      progressBar.style.backgroundColor = "green";
      gif.src = "yes.gif";
      startgame.style.display = "inline-block";
      gameOver();
    } else {
      notGrabed.style.display = "block";
      grabed.style.display = "none";
      gif.src = "cat-no.gif";
      progressBar.style.backgroundColor = "red";
    }

    //hind handle
    const hint = document.getElementById("hint");
    if (userValue > seceretValue) {
      hint.innerText = "Smaller than enterd number";
      hint.style.color = "red";
    } else if (userValue < seceretValue) {
      hint.innerText = "Greater than enterd number";
      hint.style.color = "red";
    } else {
      hint.innerText = "You got it..";
      hint.style.color = "green";
    }

    //chance decrement
    i--;
    remainChances.innerText = `Chances Remain: ${i}`;
    //gameover
    if (i == 0) {
      gameOver();
      startgame.style.display = "inline-block";
      grabed.style.display = "none";
      notGrabed.style.display = "none";
    }
  }
});

//game over function
function gameOver() {
  alert(`Random Number was ${seceretValue}......Game Over.`);
  userInput.disabled = true;
  enter.disabled = true;
}

function startAgain() {
  window.location.reload();
}

startgame.addEventListener("click", () => {
  startAgain();
});
