let playgame = confirm("Shall we play rock paper scissors?");

if (playgame) {
    //play the game
    while (playgame) {
        let playerchoise = prompt("Choose Rock, Paper or Scissors");
        if (playerchoise || playerchose=== (" ")) {
            //continue playing

            let playerone = playerchoise.trim().toLowerCase();
            if (playerone=="rock"|| playerone=="paper"|| playerone=="scissors") {
                //continue playing
                
                let computerchoise = Math.floor(Math.random() *3);
                let rpsArray = ['rock', 'paper', 'scissors'];
                let computer = rpsArray[computerchoise];

                let result = 
                    playerone === computer 
                        ? "Tie game"
                        : playerone === "rock" && computer === "paper"
                        ? `playerone: ${playerone}\ncomputer: ${computer}\nComputer wins!`

                        : playerone === "paper" && computer === "scissors"
                        ? `playerone: ${playerone}\ncomputer: ${computer}\nComputer wins!`

                        : playerone === "scissors" && computer === "rock"
                        ? `playerone: ${playerone}\ncomputer: ${computer}\nComputer wins!`

                        : `playerone: ${playerone}\ncomputer: ${computer}\nplayerone wins!`;

                    alert(result);
                    playgame = confirm("Play again?")
                    if (!playgame) alert("Okay, thanks for playing");
                    continue;



            }
            else{
                alert("You did not enter rock, paper or scissors");
                continue;
            }
    }
    else{
        alert("maybe you changed your mind, next time!");
        break;
    }}
}


else{
    alert("Okay, maybe next time!")
}