var randomNumber1 = Math.floor(Math.random()*6)+1;       //1-6
var randomDiceImage1 = "images/dice" + randomNumber1 +".png";     //dice1-6

console.log ("dice1 is " + randomNumber1);
document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage2 = "images/dice" + randomNumber2 +".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);
console.log ("dice2 is " + randomNumber2);

if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}else if (randomNumber1<randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}else{
  document.querySelector("h1").innerHTML = "Draw!";
}
