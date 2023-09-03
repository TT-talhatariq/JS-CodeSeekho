/*

Session #1 : Start & Variables
console.log("Intoduction");
console.log("Name: Talha");
console.log("Father Name: Tariq");
console.log("Residence: Pakistan");
console.log(21);
console.log(false);
console.log(18212.21);


let firstName = "Talha";
let secondName = "Tariq";
const fatherName = "Tariq";
const country = "Pakistan";
let into = "My Self is Talha.....";
var age = 21;
var gpa = 3.02;
var isMarried = false;
const isDead = true;
const pi = 3.1416;

console.log("Name: " + name); // Name: Talha
console.log("Father Name: " + fatherName);
console.log("Counry: " + country);
console.log("Age: " + age + " years");
console.log("CGPA: " + gpa);
console.log("Is Married: " + isMarried);
console.log("Is Dead: " + isDead);
//1000
age = 22;
isMarried = true;

console.log("Age: " + age + " years");
console.log("Is Married: " + isMarried);

// 1 No reserverd keywords
// 2. No number in start
// 3. No special characters
// 4. reasonable name


*/

// Session 2
// Object - We will cover later in detail
let dataOfTalha = {
  name: "Talha",
  age: 21,
  city: "Arifwala",
  country: "Pakistan",
};

// console.log(dataOfTalha);

// C++
// int number = 10;
// number = true

// Dyanmic Typing
// let number = 10;
// console.log(number);
// number = "ABC";
// console.log(number);
// number = true;
// console.log(number);

// // Operators
// console.log(4 - 2);
// let num1 = prompt("Please enter your First Number: ");
// let num2 = prompt("Please enter your Second Number: ");

// // Validation - Number

// let sum = Number(num1) + Number(num2); // "5" + "4" ==> 54
// let multiply = num1 * num2;
// let minus = num1 - num2;
// let divide = num1 / num2;

// console.log("Number One: " + num1);
// console.log("Number Two: " + num2);
// console.log("Sum: " + sum);
// console.log("Multiply: " + multiply);
// console.log("Minus: " + minus);
// console.log("Divide: " + divide);

// let n1 = 5;
// let n2 = 8;
// let n3 = 10;

// let avg = (n1 + n2 + n3) / 3;
// console.log(avg);

// Strings - Text

// let firstName = "Talha";
// let secondName = "Tariq";
// const fatherName = "Tariq";
// const country = "Pakistan";
// var age = 21;
// var gpa = 3.02;
// var isMarried = false;
// const isDead = true;
// let education = "BS-SE";
// let role = "Software Engineer";
// let university = "PUCIT";

// let introduction =
//   "My name is " +
//   firstName +
//   " " +
//   secondName +
//   " and my father name is " +
//   fatherName +
//   ". I am currently living in " +
//   country +
//   ". I graduated from " +
//   university +
//   " with having a degree of " +
//   education +
//   " having cgpa of " +
//   gpa;

// console.log(introduction);

// let updatedIntro = `My name is ${firstName} ${secondName} and my father name is ${fatherName}. I am currently living in ${country}. I gradutated from ${university} with having cgpa of ${gpa} and with the degree of ${education}. I am ${age} year old`;
// console.log(updatedIntro);

let married = true;
if (married) {
  console.log("He is Married");
} else {
  console.log("He is not Married");
}

let rain = false;
if (rain) {
  console.log("Pakistan will not play");
} else {
  console.log("Match will resume again");
}

// Scenrion : Game Restriction
let userAge = 20;
if (userAge >= 18) {
  console.log("User Can Play the Game");
} else {
  console.log("You are not eligible to play this game.");
}

let marks = 32;

if (marks < 33) {
  console.log("Fail");
} else {
  console.log("Pass");
}

// User categrorization
let age = 50;

if (age < 12) {
  console.log("Kid");
} else if (age < 18) {
  console.log("TeenAger");
} else if (age < 30) {
  console.log("Adult");
} else if (age < 50) {
  console.log("Man/woman");
} else {
  console.log("OLd");
}

let raining = false;
let cloudy = false;

if (raining || cloudy) {
  console.log("I will play");
} else {
  console.log("I will not play");
}

let bike = true;
let drink = false;
let friends = true;
let money = true;

if (bike && drink && friends && money) {
  console.log("I will go outside");
} else {
  console.log("I am not going");
}

let cry = true;
if (!cry) {
  console.log("He is crying");
} else {
  console.log("He is not crying");
}

let num1 = prompt("Please enter your First Number: ");
let num2 = prompt("Please enter your Second Number: ");
let opr = prompt("Please enter Operation ");

// Validation - Number

if (opr == "add") {
  let sum = Number(num1) + Number(num2); // "5" + "4" ==> 54
  console.log("Sum: " + sum);
} else if (opr == "multiply") {
  let multiply = num1 * num2;
  console.log("Multiply: " + multiply);
} else if (opr == "minus") {
  let minus = num1 - num2;
  console.log("Minus: " + minus);
} else {
  let divide = num1 / num2;
  console.log("Divide: " + divide);
}

let stuMarks = 50;
let stuAge = 20;

// age > 18 and a < 30
// stu > 80 and < 90

if ((stuMarks < 90 && stuMarks > 80) || (stuAge < 30 && stuAge > 20)) {
}

// task 1

// task2

// task3
