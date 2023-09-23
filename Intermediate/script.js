"use strict";
const add = (num1, num2) => {
  let sum = num1 + num2;

  return sum;
};

// let name = "Talha";
// let age = 21;
// let role = "SE";

// // // Structure
// // for (let start = 1; start <= 10; start = start + 1) {
// //   console.log("Start: ", start, " Name: ", name);
// // }

// // Numbers
// // for (let start = 0; start <= 20; start = start + 1) {
// //   console.log(start);
// // }

// // console.log("After Loop");

// // Print a Table
// /*
//     2 * 1 = 2
//     2 * 2 = 4
//     2 * 3 = 8
// */

// // console.log(`2 * ${1} = ${2 * 1}`);

// // console.log(`2 * ${2} = ${2 * 2}`);

// // console.log(`2 * ${3} = ${2 * 3}`);

// function tableOfTen() {
//   // code that has to be repeated
//   for (let start = 1; start <= 10; start = start + 1) {
//     console.log(`10 * ${start} = ${10 * start}`);
//   }
// }

// // Fibonacci Sequence
// // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ......

// // let firstNumber = 0;
// // let secondNumber = 1;
// // for (let start = 0; start < 20; start++) {
// //   let result = firstNumber + secondNumber;

// //   firstNumber = secondNumber;
// //   secondNumber = result;

// //   console.log(result);
// // }

// tableOfTen();

// for (let outer = 1; outer <= 5; outer++) {
//   for (let i = 0; i < 5; i++) {
//     console.log(name + " ", i);
//   }
// }

// tableOfTen();

// let age2 = 22;
// console.log(age);

// let uni = "PUCIT";
// uni = "Naseeha";

// console.log(uni);

// if (age < 18) {
//   console.log("Not Eligible");
// } else {
//   console.log("Eligible");
// }

// for (let i = 10; i > -2; i--) {
//   console.log(20 / i);
//   // i = 0
//   // 20 / 0
// }

// /*

// Syntax: Voilation of Rules
// Logical: Mistake in Code
// Runtime: Unexpected input while executing code.

// */

// tableOfTen();

// Declaration Method of making a function
function printInfoD() {
  console.log("Name: Talha");
  console.log("Age: 21");
  console.log("Role: Student");
}

// Expression method of making a function
const printInfoE = function () {
  console.log("Name: Talha");
  console.log("Age: 21");
  console.log("Role: Student");
};

// Arrow Function
const printInfoA = () => {
  console.log("Name: Talha");
  console.log("Age: 21");
  console.log("Role: Student");
};

// printInfoD();
// printInfoD();
// printInfoD();

// printInfoE();
// printInfoA();

// Student 1: 31, 45, 49
// Student 2: 90, 76, 12
// Student 3: 65, 43, 87
// 3*60   === 180

// arguments, parameters, input,
const printStudentData = (subj1, subj2, subj3) => {
  console.log("Chemistry: ", subj1);
  console.log("English: ", subj2);
  console.log("Urdu: ", subj3);
  console.log("Sum: ", subj1 + subj2 + subj3);
  console.log("Avg: ", (subj1 + subj2 + subj3) / 3);
};

// console.log("Data of Talha");
// printStudentData(23, 87, 34);

// console.log("Data of Ali");
// printStudentData(89, 64, 44);

// console.log("Data of Abdullah");
// printStudentData(99, 35, 84);

let sum1 = add(2, 4);
console.log(sum1);
let sum2 = add(4, 6);
console.log(sum2);
let sum3 = add(8, 10);

// Function
// 1. To reuse and to avoid repeation of same code
// 2. Inputs (Arguments)
// 3. Output

// Write a function called isEven that
//takes in a number as a parameter and
//returns true if the number is even and
// false if it is odd.

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isEven(5));

// Write a function called countVowels that
//takes in a string as a parameter
//and returns the number of vowels in the string.
// For example, countVowels("hello") should return 2.

const countVowels = (text) => {
  let vowelCount = 0;
  // 1. How to take one character of a string?
  // 2. Check if vowel or not

  for (let start = 0; start < text.length; start++)
    if (
      text[start] === "a" ||
      text[start] === "e" ||
      text[start] === "i" ||
      text[start] === "o" ||
      text[start] === "u"
    ) {
      vowelCount++;
    }

  // 3. Increment count
  // 4. Return

  return vowelCount;
};

console.log("Count of Vowels: ", countVowels("hello"));

// hello
// 01234

console.log("Count of Vowels: ", countVowels("Talha"));

console.log("Count of Vowels: ", countVowels("Welcome to my Home"));

// Arrays
// student 1
let stu1 = "Talha";
let rollNo = 1;
let address = "Lahore";
let age = 21;
let cgpa = 3.1;

// student 2
let stu2 = "Ali";
let rollNo2 = 2;
let address2 = "Lahore";
let age2 = 22;
let cgpa2 = 3.9;

// student 3
let stu3 = "Abdullah";
let rollNo3 = 1;
let address3 = "Lahore";
let age3 = 21;
let cgpa3 = 3.1;

// student 4
let stu7 = "Numan";
let rollNo4 = 2;
let address4 = "Lahore";
let age4 = 22;
let cgpa4 = 3.9;

/// 5 (per student)
// 50 * 5 = 250 (Variables to hold the data)
// 500 per section
// 500*4 = 2000 * 4 => 8000 ( student data)

let studentNames = [
  "Talha",
  "Ali",
  "Abdullah",
  "Numan",
  "Ikram",
  "Ahmer",
  "Mahad",
  "Ans",
];

let studentsAge = [21, 22, 23, 21, 24, 26, 20, 19];
let studentCGPA = [3.1, 3.2, 3.3, 3.4, 3.5, 2.5, 2.8, 2.0];

for (let i = 0; i < studentNames.length; i++) {
  if (studentCGPA[i] > 2.5) {
    let intro = `${studentNames[i]} is ${studentsAge[i]} years old with having cgpa of ${studentCGPA[i]}`;
    console.log(intro);
  }
}

// // Use / Access / Manipulate / Update
// console.log(studentNames[0]);
// studentNames[0] = "Tariq";
// console.log(studentNames[0]);
// // Indexing : to access elements of array
// studentNames.push("Subhan");
// console.log(studentNames);

// studentNames.sort();

// console.log(studentNames.indexOf("Tariq"));

/*

Write a program that prompts the user 
to enter five numbers and stores
them in an array. 
Then, output the sum of the numbers to the console
*/

// let numbers = [];
// for (let i = 0; i < 5; i++) {
//   let value = Number(prompt("Enter Number: "));
//   numbers.push(value);
// }

// console.log(numbers);
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum = sum + numbers[i];
// }

// console.log("Sum of Array: ", sum);

/*

Write a function called findMax that takes in an array of numbers as a
parameter and returns the largest number in the array.

*/

const findLargest = (numbers) => {
  let smallest = 3218371273;

  // iterate over the array
  for (let i = 0; i < numbers.length; i++) {
    // check for each elment

    if (numbers[i] < smallest) {
      smallest = numbers[i];
    }
  }

  return smallest;
};

let array = [3, 5, 7, 1, 9];
let largest = findLargest(array);
console.log(largest);

let user1 = {
  name: "Talha",
  age: 21,
  address: "Pakistan",
  cgpa: 3.1,
  role: "Student",
  isMarried: false,
};

user1.role = "professional";
console.log(user1.role);

let studentsData = [
  {
    name: "Talha",
    age: 21,
    cgpa: 3.1,
  },

  {
    name: "Ans",
    age: 22,
    cgpa: 3.2,
  },

  {
    name: "Ali",
    age: 23,
    cgpa: 3.8,
  },

  {
    name: "Abdullah",
    age: 29,
    cgpa: 3.9,
  },
];

console.log(studentsData[0].name);
/*

Write a function called calculateTotalPrice
 that takes in an array of items (each
item represented as an object with
 properties for name and price) and returns
the total price of all items in the array.
*/

const calculateTotalPrice = (array) => {
  let totalPrice = 0;

  console.log(array);
  // logic
  for (let i = 0; i < array.length; i++) {
    totalPrice = totalPrice + array[i].price;
  }

  return totalPrice;
};

let items = [
  { name: "Laptop", price: 210000 },
  { name: "Mouse", price: 2000 },
  { name: "keyboard", price: 5000 },
  { name: "Charger", price: 2000 },
];
let totalPrice = calculateTotalPrice(items);
console.log(totalPrice);
