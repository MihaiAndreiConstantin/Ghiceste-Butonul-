let luckyNumber 
let arr = ["Unlucky", "Unlucky", "Unlucky"];
let buttonsPressed = 0

function randomNumbers() {
    luckyNumber = Math.floor(Math.random() * 3);
    arr[luckyNumber] = "Lucky"
}

function pressButton(x) {
    if (buttonsPressed == 0) {
        ++buttonsPressed
        document.getElementById(x).innerHTML = arr[x]
        if (arr[x] == "Lucky") {
            document.getElementById("luck-test").innerHTML = "You are lucky, you should buy some lotto tickets."
        } else {
            document.getElementById("luck-test").innerHTML = "Better luck next time!"
        }
    }
}
