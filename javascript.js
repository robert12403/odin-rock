
function getComputerChoice() {
    let x = Math.random()
    if (x < 0.333)
        return "rock"
    if (x > 0.666)
        return "paper"
    return "scissors"
}

function getHumanChoice() {
    return prompt("Choose between rock, paper, scissors.")
}



function playGame() {
    let humanScore = 0, computerScore = 0

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase()
        if (humanChoice === computerChoice)
            console.log("It's a draw! Computer choose " + computerChoice + " as well.")
        else if ((humanChoice === "rock" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "rock")) {
            computerScore++
            console.log("You lost! Computer chose " + computerChoice)
        }
        else {
            humanScore++
            console.log("You won! Computer chose " + computerChoice)
        }
        console.log("Current score: You " + humanScore + ", Computer " + computerScore)
    }

    console.log("Round 1"); playRound(getHumanChoice(), getComputerChoice())
    console.log("Round 2"); playRound(getHumanChoice(), getComputerChoice())
    console.log("Round 3"); playRound(getHumanChoice(), getComputerChoice())
    console.log("Round 4"); playRound(getHumanChoice(), getComputerChoice())
    console.log("Round 5"); playRound(getHumanChoice(), getComputerChoice())

    if (humanScore === computerScore)
        console.log("Overall winner: DRAW")
    else if (humanScore > computerScore)
        console.log("Overall winner: YOU")
    else console.log("Overall winner: COMPUTER")

}

playGame()

