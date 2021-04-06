"use strict";
/*
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

//exercise
const calcAge = function (birthYear) {
  return 2022 - birthYear;
};

const years = [1987, 2008, 2012, 2014, 2016, 2018];

console.log(calcAge(years[years.length - 1]));
console.log(years.map((year) => calcAge(year)));

//coding #2
const calcTip = function (bill) {
  return bill >= 50 && bill < 300 ? bill * 1.15 : bill * 1.2;
};

const bills = [125, 555, 44];
const totals = bills.map((bill) => calcTip(bill));
console.log(totals);
*/

//other example
/*
const nora = {
  firstName: "Nora",
  lastName: "Attobra",
  birthYear: 1987,
  job: "Front-end developer",
  family: ["Habib", "Keon", "lejla", "the babies"],
  hasDriverLicense: false,

  calcAge: function () {
    this.age = 2021 - this.birthYear;
    return this.age;
  },
  paragraph: function () {
    return `${this.firstName}  is a ${this.calcAge()} years old ${
      this.job
    } and she has ${this.hasDriverLicense ? "a" : "no"} driver license.`;
  },
};

console.log(nora.calcAge());

// const interestedIn = prompt(
//   "what do you want to know about Nora? choose firstName, lastName, age, job or family"
// );

// if (nora[interestedIn]) {
//   console.log(`This is what you can learn about nora: ${nora[interestedIn]}`);
// } else {
//   console.log("wrong entry");
// }

console.log(nora.paragraph());
*/

const mark = {
  fullName: "Mark Miller",
  weight: 78,
  height: 1.69,
  calcBMI: function () {
    this.valueBMI = this.weight / this.height ** 2;
    return this.valueBMI;
  },
};

console.log(mark.valueBMI);
const john = {
  fullName: "John Smith",
  weight: 92,
  height: 1.95,
  calcBMI: function () {
    this.valueBMI = this.weight / this.height ** 2;
    return this.valueBMI;
  },
};

if (mark.calcBMI() > john.calcBMI()) {
  console.log(
    `${mark.fullName}'s BMI (${mark.valueBMI}) is higher than ${john.fullName}'s BMI (${john.valueBMI})`
  );
} else {
  console.log(
    `${john.fullName}'s BMI (${john.valueBMI}) is higher than ${mark.fullName}'s BMI (${mark.valueBMI})`
  );
}
