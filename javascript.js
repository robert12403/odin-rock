

function getComputerChoice() {
    let x = Math.random()
    if (x < 0.333)
        return "rock"
    if (x > 0.666)
        return "paper"
    return "scissors"
}


function playGame() {
    let humanScore = 0, computerScore = 0, rounds = 0
    const displayScore = document.querySelector("#displayScore")
    const displayNow = document.querySelector("#displayNow")
    const round = document.querySelector("#round")
    const end = document.querySelector("#end")

    function playRound(humanChoice, computerChoice) {
        if (rounds == 5) {
            rounds = 0; humanScore = 0; computerScore = 0;
            end.textContent = ""
        }
        rounds++
        round.textContent = "ROUND NUMBER: " + rounds
        humanChoice = humanChoice.toLowerCase()
        if (humanChoice === computerChoice)
            displayNow.textContent = "It's a draw! Computer choose " + computerChoice + " as well."
        else if ((humanChoice === "rock" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "rock")) {
            computerScore++
            displayNow.textContent = "You lost! Computer chose " + computerChoice
        }
        else {
            humanScore++
            displayNow.textContent = "You won! Computer chose " + computerChoice
        }
        displayScore.textContent = "Current score: You " + humanScore + ", Computer " + computerScore

        if (rounds == 5) {
            if (humanScore === computerScore)
                end.textContent = "Overall winner: DRAW. Play again?"
            else if (humanScore > computerScore)
                end.textContent = "Overall winner: YOU. Play again?"
            else end.textContent = "Overall winner: COMPUTER. Play again?"
        }
    }

    const btnRock = document.querySelector("#rock")
    const btnPaper = document.querySelector("#paper")
    const btnScissors = document.querySelector("#scissors")

    btnRock.addEventListener("click", () => playRound("rock", getComputerChoice()))
    btnPaper.addEventListener("click", () => playRound("paper", getComputerChoice()))
    btnScissors.addEventListener("click", () => playRound("scissors", getComputerChoice()))




}

playGame()

