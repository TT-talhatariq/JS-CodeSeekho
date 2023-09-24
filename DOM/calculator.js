"use strict";
// variables
let num1 = document.querySelector(".num1");
let num2 = document.querySelector(".num2");
let btn = document.querySelector("button");
let result = document.querySelector("p");

const calculateResult = () => {
  if (num1.value === "" || num2.value === "") {
    // alert("Input both numnber");
    result.classList.remove("hide");
    result.innerHTML = "Input Both Number";
  } else {
    let n1 = Number(num1.value);
    let n2 = Number(num2.value);

    let sum = n1 + n2;

    // show result
    result.classList.remove("hide");
    result.innerHTML = "Sum: " + sum;
  }
};

// event listeners
btn.addEventListener("click", calculateResult);
