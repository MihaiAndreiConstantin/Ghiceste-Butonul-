let luckyNumber, secondLuckyNumber
let buttonsPressed = false

function randomNumbers() {
    luckyNumber = Math.floor(Math.random() * 3);
    secondLuckyNumber = Math.floor(Math.random() * 3)
}

function pressButton(x) {
    if (buttonsPressed == false) {
        buttonsPressed = true 
        if (secondLuckyNumber == luckyNumber) {
            document.getElementById(x).innerHTML = "Lucky"
            document.getElementById("luck-test").innerHTML = "You are lucky, you should buy some lotto tickets."
        } else {
            document.getElementById("luck-test").innerHTML = "Better luck next time!"
            document.getElementById(x).innerHTML = "Unlucky"
        }
    }
}
