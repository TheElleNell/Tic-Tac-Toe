// Eleanor Brow Tic-Tac-Toe Game

// 
// ask paul
// x player won
// arrow near words
// leaving 
// pages 




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




// THE FIRST CLICK 

console.log("Before score", Whale)

function firstClick() {

  console.log("After", Whale.score)
  let buttons = Array.from(document.getElementsByClassName("spot"))
  let game = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  let button1 = (document.querySelector("#playSpot1"))
  let spot1 = (document.getElementById("playSpot1"))
  let spot4 = (document.getElementById("playSpot4"))
  let spot7 = (document.getElementById("playSpot7"))
  let blue = "#0d2075"
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
  spot1.style.backgroundColor = blue
  spot4.style.backgroundColor = blue
  spot7.style.backgroundColor = blue
  alert("WHALE WON")
}
else if (Whale.score === 8){
  buttons[place].classList.add("player2")
}

else if (Whale.score === 9){
  buttons[place].classList.add("player1")
  alert("The game ends in a tie!!! Click 'Restart Game' to play again")
}

// else if (buttons.innerText.trim() === ""){
//   alert("youtube")
// }

// else if (Whale.score === 7) {
// alert("working")

// console.log(spot1)
// }

    })

    winningAnother1()
  })
  winningAnother1()
}


// establishing the winner

// LOOP OVER THIS ARRAY

// let winningOptions = [
// ["playSpot1", "playSpot2", "playSpot3"]
// ["playSpot4", "playSpot5", "playSpot6"]
// ["playSpot7", "playSpot8", "playSpot8"]
// ["playSpot1", "playSpot4", "playSpot7"]
// ["playSpot2", "playSpot5", "playSpot8"]
// ["playSpot3", "playSpot6", "playSpot8"]
// ["playSpot1", "playSpot5", "playSpot8"]
// ["playSpot3", "playSpot5", "playSpot7"]
// ]

// let winningCombinations = [
//   [0, 1, 2]
//   [3, 4, 5]
//   [6, 7, 8]
//   [0, 3, 6]
//   [1, 4, 7]
//   [2, 5, 8]
//   [0, 4, 8]
//   [2, 4, 6]
//   ]

let spot1 = (document.getElementById("playSpot1"))

console.log(spot1)

function winningAnother1() {

if (spot1.className === "spot player1")
alert("working")

console.log(spot1)
// let buttons = (document.getElementsByClassName("spot"))
//  if (buttons[0].children === "player1")
//   alert("hi")

}

// console.log(winningAnother1())
winningAnother1()
  
// function winningAnother() {
//  if (buttons.classList.contains("player1") === true)
//   alert("hi")

// }


// winningAnother()



// function winning1() {
  //   winningCombinations.forEach(function())
  //   let combo = 
  //   if(check)
  //     alert("i think it won")

  //     }


  function winner12() {



  }
    
  console.log(spot1)


// function winning1() {
//   let buttons = Array.from(document.getElementsByClassName("spot"))
//   for(let i = 0; i <= 0; i++){
//     let a = buttons[winningOptions[0]]
//     let b = buttons[winningOptions[1]]
//     let c = buttons[winningOptions[2]]
//     if (a === "" || b === "" || c === ""){
//       alert("winning")
//     }
//   }
// }

// winning1()




// function playerWon() {
//   let buttons = Array.from(document.getElementsByClassName("spot"))
//   for(let condition of winningOptions){
//     let [a, b, c] = condition

//     if (buttons[a] && (buttons[a] == buttons[b] && buttons[a] == buttons[c])){
//       return alert("working")
//     }
//   }
// }
// playerWon()


function winGame() {
  let button1 = (document.querySelector("#playSpot1"))
  console.log(button1)
  let board = (document.querySelector(".board"))
  if (button1.onclick === true)
  alert("Whale wins")


}
winGame()


// function secondClick() {

//   console.log("After", Whale.score)
//   let buttons = Array.from(document.getElementsByClassName("spot"))
//   let button1 = (document.querySelector("#playSpot1"))
//   // if (button1 === "click"){
//   //   alert("player 1 won")
//   // }

//   // loop through the board spots

//   buttons.forEach(button => {
//     button.addEventListener("click", (click) => {
//       let place = buttons.indexOf(click.target)
//       buttons[place].classList.add("player1")
//       Whale.score += 1
//       console.log(buttons)
//       console.log(Whale.score)
//       // IF STATEMENT TO KEEP SCORE
//       if (button1 === "click"){
//         alert("player 1 wins")
//        }
//       //  else if (Whale.score === 3){
//       //   buttons[place].classList.add("player1")
//       //  }


//     })
//   })

// }

// secondClick()
// console.log(secondClick())

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

// function winning() {
//   let button1 = (document.querySelector("#playSpot1"))
//   // if (button1 === "click"){
//   //   alert("player 1 won")
//   // }
//   // else if (Whale.score === 3){
//   //  buttons[place].classList.add("player1")
//   // }

// }

// winning()



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