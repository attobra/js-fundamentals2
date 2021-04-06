"use strict";

const calcAverage = function (score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
};

const checkWinner = function (team1, team2) {
  if (team1 >= 2 * team2) {
    console.log(`dolphins win (${team1} vs ${team2})`);
  } else if (team2 >= 2 * team1) {
    console.log(`koalas win (${team2} vs ${team1})`);
  } else {
    console.log(`No winners`);
  }
};

let koalasScore = calcAverage(23, 34, 27);
let dolphinsScore = calcAverage(85, 54, 41);
checkWinner(dolphinsScore, koalasScore);

koalasScore = calcAverage(11, 230, 111);
dolphinsScore = calcAverage(43, 0, 45);
checkWinner(dolphinsScore, koalasScore);
