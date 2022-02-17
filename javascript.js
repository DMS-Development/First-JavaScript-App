/*const buttons = document.querySelector('.rock')
buttons.addEventListener('click', function (e) {
    console.log(e);
});*/
const rockButton = document.querySelector('.rock');
rockButton.addEventListener('click', game);

const paperButton = document.querySelector('.paper');
rockButton.addEventListener('click', game);

const scissorsButton = document.querySelector('.scissors');
rockButton.addEventListener('click', game);


function game (userPick, compPick) {
    const buttons = document.querySelectorAll('button')
    const output = document.querySelector('.winnerAndScore');
    const choices = ['rock', 'paper', 'scissors'];
    let userScore = 0;
    let compScore = 0;

        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                userPick = button.textContent.toLowerCase();
                compPick = choices[Math.floor(Math.random() * choices.length)];

                if (userPick === compPick) {
                    output.textContent = "It's a Tie! Try again.";
                } else if (userPick == 'rock') {
                    if (compPick == 'paper') {
                        ++compScore;
                        output.textContent = "You Lose! Computer Score Is: " + compScore;
                    } else {
                        ++userScore;
                        output.textContent = "You Win! Your Score is: " + userScore;
                    }
                } else if (userPick == 'paper') {
                    if (compPick == 'scissors') {
                        ++compScore;
                        output.textContent = "You Lose! Computer Score Is: " + compScore;
                    } else {
                        ++userScore;
                        output.textContent = "You Win! Your Score is: " +userScore;
                    }
                } else if (userPick == 'scissors') {
                    if (compPick == 'rock') {
                        ++compScore;
                        output.textContent = "You Lose! Computer Score Is: " + compScore;
                    } else {
                        ++userScore;
                        output.textContent = "You Win! Your Score is: " + userScore;
                    }
                }
            })
        })
}

/*function game(userPick, compPick) {

    // Holds score and number of rounds

    let userScore = 0;
    let compScore = 0;
    let gameRound = 1;

        // Loops the entire game for five rounds

        for (gameround = 1; gameRound < 6; ++gameRound) {

            // Recieves choice of Rock Paper Scissors from user and lowercases response to make it case insensitve
            // Also randomly generates computer choice from array of "Rock Paper Scissors"
            
            let userPick = prompt("Choose Rock, Paper, or Scissors!").toLowerCase();
            let choices = ["rock", "paper", "scissors"];
            compPick = choices[Math.floor(Math.random() * choices.length)];

            // Outputs user and computer choices

            console.log(userPick, compPick);

            // Determines outcome of choices and adds score to the winner

            if (userPick == compPick) {
                ++userScore;
                ++compScore;
                console.log("It's a Tie! " + "Player: " + userScore, "Computer: " + compScore);
            } else if (userPick == "rock" && compPick == "paper") {
                ++compScore;
                console.log("Lost Round! " + "Player: " + userScore, "Computer: " + compScore);
            } else if (userPick == "paper" && compPick == "rock") {
                ++userScore
                console.log("Won Round! " + "Player: " + userScore, "Computer: " + compScore);
            } else if (userPick == "scissors" && compPick == "rock") {
                ++compScore;
                console.log("Lost Round! " + "Player: " + userScore, "Computer: " + compScore);
            } else if (userPick == "rock" && compPick == "scissors") {
                ++userScore;
                console.log("Won Round! " + "Player: " + userScore, "Computer: " + compScore);
            } else if (userPick == "paper" && compPick == "scissors") {
                ++compScore;
                console.log("Lost Round! " + "Player: " + userScore, "Computer: " + compScore);
            } else if (userPick == "scissors" && compPick == "paper") {
                ++userScore;
                console.log("Won Round! " + "Player: " + userScore, "Computer: " + compScore);
            }

            // Determines if program is on the last round and outputs winner or loser message

            if (gameRound == 5) {
                if (userScore > compScore) {
                    return "You Won The Game! The Final Score is: " + userScore + " : " + compScore + " Refresh to Play Again!";
                } else if (compScore > userScore) {
                    return "Computer Wins! The Final Score is: " + userScore + " : " + compScore + " Refresh to Try Again!";
                }else if ( userScore == compScore) {
                    return "Its a Tie! The Final Score is: " + userScore + " : " + compScore + " Refresh to Play Again!";
                }
        }
    }
        
}*/