// Eleanor Brow Tic-Tac-Toe Game


// CALLING BUTTONS AND UPDATING THEM

// turning my buttons into an array 

console.log("Before Buttons")

let buttons = Array.from(document.getElementsByClassName("spot"))

console.log(buttons)


// establishing players

let player1 = true

let player2 = true




// establishing the board



   

// buttons.addEventListener("click", whaleClick)

function firstClick() {
  let buttons = Array.from(document.getElementsByClassName("spot"))
  let game = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  // loop through the board spots

  buttons.forEach(button => {
    button.addEventListener("click", (click) => {
      let place = buttons.indexOf(click.target)
      buttons[place].classList.add("player1")

      console.log(buttons)
      console.log
    })
  })
  }

console.log(firstClick())

firstClick()


  document.getElementById("playSpot1").src = "assets/whale-g69f6c2238_1280.png"





// TURTLE FUNCTION





// CLICK EVENTS



// RE-LOAD PAGE WHEN GAME IS OVER

// let restartButton = document.getElementsByClassName("restart")

// console.log(restartButton)

// restartButton.addEventListener("click", pageReLoad)

// function pageReLoad() {
//   location.reload()
// console.log(pageReLoad)

// }
// console.log(pageReLoad)




// _________________________________

// NOTES:

// function firstClick(click){
//   const playNow = click.target

// }

// let game = ["", "", "", "", "", "", "", "", ""]



// function startWhale() {
//   let buttons = (document.querySelector(".spot"))

//   console.log(buttons)

//   buttons.addEventListener("click", firstClick, {once: true})





// }

// console.log(startWhale())
// startWhale()
