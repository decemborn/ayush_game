var me;
var myScore = 0;
var computer;
var computerScore = 0;

var choices = ["rock", "paper", "scissors"];

window.onload = function () {
    for (let i = 0; i < 3; i++) {
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);
    }
}

function selectChoice() {
    me = this.id;
    document.getElementById("my-choice").src = me + ".png";

    computer = choices[Math.floor(Math.random() * 3)];
    document.getElementById("computer-choice").src = computer + ".png";

    if (me == computer) {
        myScore += 1;
        computerScore += 1;
    }
    else {
        if (me == "rock") {
            if (computer == "scissors") {
                my += 1;
            }
            else if (computer == "paper") {
                computerScore += 1;
            }
        }
        else if (me == "scissors") {
            if (computer == "paper") {
                yourScore += 1;
            }
            else if (computer == "rock") {
                computer += 1;
            }
        }
        else if (me == "paper") {
            if (computer == "rock") {
                myScore += 1;
            }
            else if (computer == "scissors") {
                computerScore += 1;
            }
        }
    }

    document.getElementById("my-score").innerText = myScore;
    document.getElementById("computer-score").innerText = computerScore;
}