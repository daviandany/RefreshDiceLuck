let arrayDices = ["./dice1.png", "./dice2.png", "./dice3.png", "./dice4.png", "./dice5.png", "./dice6.png"]

let randomizingDice1 =  Math.floor(Math.random() * arrayDices.length);
let randomizingDice2 = Math.floor(Math.random() * arrayDices.length)

const imgChanged1 = arrayDices[randomizingDice1];
const imgChanged2 = arrayDices[randomizingDice2];

document.querySelector("#dice1").setAttribute("src", imgChanged1);
document.querySelector("#dice2").setAttribute("src", imgChanged2);
