// Eleanor Brow Tic-Tac-Toe Game



// WHALE FUNCTION 

console.log("Before Whale Button")
let whaleButton = document.querySelector(".playSpot1")

whaleButton.addEventListener("click", whaleClick)

function whaleClick() {
  document.getElementById("playSpot1").src = "assets/whale-g69f6c2238_1280.png"


}


// TURTLE FUNCTION





// CLICK EVENTS



// RE-LOAD PAGE WHEN GAME IS OVER

let resetButton = document.querySelector(".restart")

resetButton.addEventListener("click", pageReLoad)

function pageReLoad() {
  location.reload()
console.log(pageReLoad)

}
console.log(pageReLoad)
