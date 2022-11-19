let luckyNumber 
let arr = ["Unlucky", "Unlucky", "Unlucky"];
let buttonsPressed = 0

function randomNumbers() {
    luckyNumber = Math.floor(Math.random() * 3);
    arr[luckyNumber] = "Lucky"
    console.log(luckyNumber)
}

function unlucky() {
     document.getElementById("luck-test").innerHTML = "Better luck next time!"
}

function lucky() {
     document.getElementById("luck-test").innerHTML = "You are lucky, you should buy some lotto tickets."
}

function pressFirstButton() {
    if (buttonsPressed == 0) {
        ++buttonsPressed
        document.getElementById("change-text1").innerHTML = arr[0]
        if (arr[0] == "Lucky") {
            lucky()
        } else {
            unlucky()
        }
    }
}

function pressSecondButton() {
    if (buttonsPressed == 0) {
        ++buttonsPressed
        document.getElementById("change-text2").innerHTML = arr[1]
        if (arr[1] == "Lucky") {
            lucky()
        } else {
            unlucky()
        }
    }
}

function pressThirdButton() {
    if (buttonsPressed == 0) {
        ++buttonsPressed
        document.getElementById("change-text3").innerHTML = arr[2]
        if (arr[2] == "Lucky") {
            lucky()
        } else {
            unlucky()
        }
    }
}
