let player = 0
let score = [0, 0]
const winningScore = 100

const diceImg = ["./images/dice_1.png", "./images/dice_2.png", "./images/dice_3.png", "./images/dice_4.png", "./images/dice_5.png", "./images/dice_6.png"]

const diceInLeft = document.getElementById("diceInLeft")
const diceInRight = document.getElementById("diceInRight")
const rollDice = document.getElementById("rollDice")
const playerOneScore = document.getElementById("playerOneScore")
const playerTwoScore = document.getElementById("playerTwoScore")
const detail = document.getElementById("detail")
const newGame = document.getElementById("newGame")
const editPlayer = document.getElementById("editPlayer")
var player1 = "Player I"
var player2 = "Player II"

const switchPlayer = () => player ? player = 0 : player = 1

newGame.addEventListener("click", () => {
    window.location.reload();
})

editPlayer.addEventListener("click", () => {
    player1 = prompt("Change Player1 name");
    player2 = prompt("Change player2 name");

    document.querySelector("p.player1")
        .innerHTML = player1;

    document.querySelector("p.player2")
        .innerHTML = player2;
})


rollDice.addEventListener("click", () => {

    detail.textContent = `Game On 😎`

    let diceOne = Math.floor(Math.random() * 6) + 1
    let diceTwo = Math.floor(Math.random() * 6) + 1

    diceInLeft.setAttribute('src', diceImg[diceOne - 1])
    diceInRight.setAttribute('src', diceImg[diceTwo - 1])
    

    if (diceOne === 1 && diceTwo === 1) {
        score[player] = 0
        switchPlayer()

    } else {
        let tot = diceOne + diceTwo
        score[player] = score[player] + tot <= winningScore ? score[player] + tot : score[player]

        playerOneScore.textContent = score[0]
        playerTwoScore.textContent = score[1]

        if (score[player] === winningScore) {
            if (player === 0) {
                document.getElementById(`playerOneWin`).style.display = 'flex'
            } else {
                document.getElementById(`playerTwoWin`).style.display = 'flex'
            }

            detail.textContent = `${player ? player2 : player1} Won the Game🎉`
            document.getElementById("rollDice").disabled = true;
            return

        }
       
        diceOne !== diceTwo && switchPlayer()
        
    }

})



