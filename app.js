// Eleanor Brow Tic-Tac-Toe Game

// 
// ask paul
// x player won
// music 
// arrow near words




// CALLING BUTTONS AND UPDATING THEM

// turning my buttons into an array 

console.log("Before Buttons")

let buttons = Array.from(document.getElementsByClassName("spot"))

console.log(buttons)


// establishing players

// let player1 = 1

// let player2 = true

// CREATING MY PLAYER CLASS

class Player {
  constructor(name, score) {
  this.name = name;
  this.score = 0;

  }
}

// MY PLAYER 
const Whale = new Player('Whale')

console.log(Whale)

console.log(Whale.score)


// establishing the board



// THE FIRST CLICK 

console.log("Before score", Whale)

function firstClick() {

  console.log("After", Whale.score)
  let buttons = Array.from(document.getElementsByClassName("spot"))
  let game = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  // loop through the board spots

  buttons.forEach(button => {
    button.addEventListener("click", (click) => {
      let place = buttons.indexOf(click.target)
      buttons[place].classList.add("player1")
      Whale.score += 1
      console.log(buttons)
      console.log(Whale.score)
      // IF STATEMENT TO KEEP SCORE
      if (Whale.score === 1){
       }
       else if (Whale.score === 3){
        buttons[place].classList.add("player1")
       }
       else if (Whale.score === 2){
        buttons[place].classList.add("player2")
       }
       else if (Whale.score === 4){
        buttons[place].classList.add("player2")
     }
     else if (Whale.score === 5){
      buttons[place].classList.add("player1")
   }
   else if (Whale.score === 6){
    buttons[place].classList.add("player2")
 }
 else if (Whale.score === 7){
  buttons[place].classList.add("player1")
}
else if (Whale.score === 8){
  buttons[place].classList.add("player2")
}
    })
  })

}

// if (player1 === 1){
//     firstClick()
//   }
// else {
//   secondClick()



// firstClick()

console.log(firstClick())
console.log(Whale.score)

console.log(Whale.score)

// THE SECOND CLICK


// console.log(secondClick())

// secondClick()

// function toggle() {


// toggle()


// WINNING THE GAME

function winning() {
  let button1 = (document.querySelector("#playSpot1"))
  // if (button1 === ){
  //   alert("player 1 won")
  // }
  // else if (Whale.score === 3){
  //  buttons[place].classList.add("player1")
  // }

}

winning()



// RE-LOAD PAGE WHEN GAME IS OVER

let buttons1 = document.querySelectorAll(".spot")

let restartButton = document.querySelector(".restart")

restartButton.addEventListener("click", pageReLoad)

function pageReLoad() {
  alert("The game will now reset")
  window.location.reload();

}

console.log(buttons1)
console.log(pageReLoad)


// MUSIC

// let music = document.querySelector("#music")

// music.addEventListener("click", playMusic)

// function playMusic() {
//   music.play()
// }

// function pauseMusic() {
//   music.pause()
// }



// _________________________________

// NOTES:


// let restartButton = document.getElementsByClassName("restart")

// console.log(restartButton)

// // restartButton.addEventListener("click", pageReLoad)

// // let buttons1 = Array.from(document.getElementsByClassName("spot"))
// let game = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// loop through the board spots

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