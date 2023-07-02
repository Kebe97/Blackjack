// let age = 106;
// let time = age - 100;
// if (age < 100) {
//     console.log("You're not eligible yet")
// } else if (age === 100) {
//     console.log("Here is your birthday card from the King!")
// } else {
//     console.log("You're not eligible, you have already gotten one " + time + " years ago!")
// }

let cards = [] // array
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


let player = {
    name: "Mouhamed",
    chips: 200,
    greet: function () {
        console.log("Hello!")
    }
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let number = Math.floor(Math.random() * 13) + 1
    if (number === 1) {
        return 11
    } else if (number > 10) {
        return 10
    } else {
        return number
    }
}

function renderGame() {
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Woohoo! You've got BlackJack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent = cardsEl.textContent +  cards[i] + " "
    }
}

function newCard2() {
    if (hasBlackJack === false && isAlive === true) {
        newCard()
    }
}

function newCard() {
    let Card = getRandomCard();
    console.log("Drawing a new card from the deck!")
    sum += Card
    cards.push(Card)
    renderGame()
    player.greet()
    // cardsEl.textContent = "Cards: " + firstCard + ", " + secondCard + ", " + thirdCard
}

function startGame () {
    isAlive = true
    hasBlackJack = false
    let first = getRandomCard()
    let second = getRandomCard()
    cards = [first, second]
    sum = first + second
    console.log(cards)
    
    renderGame()
}
// console.log(hasBlackJack)
// console.log(isAlive)
