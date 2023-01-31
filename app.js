// Eleanor Brow Tic-Tac-Toe Game



// CALLING BUTTONS AND UPDATING THEM

console.log("Before Buttons")

let buttons = Array.from(document.getElementsByClassName("spot"))

// turned my buttons into an array 

console.log(buttons)



buttons.addEventListener("click", whaleClick)

function whaleClick() {
  document.getElementById("playSpot1").src = "assets/whale-g69f6c2238_1280.png"


}


// TURTLE FUNCTION





// CLICK EVENTS



// RE-LOAD PAGE WHEN GAME IS OVER

let restartButton = document.getElementsByClassName("restart")

console.log(restartButton)

restartButton.addEventListener("click", pageReLoad)

function pageReLoad() {
  location.reload()
console.log(pageReLoad)

}
console.log(pageReLoad)
