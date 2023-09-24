"use strict";
// variables
let tempInput = document.querySelector("input");
let button = document.querySelector("button");
let result = document.querySelector("p");

const convert = () => {
  if (tempInput.value === "") {
    result.classList.remove("hide");
    // 4. Show Result
    result.innerHTML = "Input a Valid Number";
    result.style.color = "red";
  } else {
    // 1. Value
    let celsiusValue = Number(tempInput.value);
    // 2. Conversion
    let fTemp = (celsiusValue * 9) / 5 + 32;
    console.log(fTemp);
    // 3. REMOVE hide class
    result.classList.remove("hide");
    // 4. Show Result
    result.innerHTML = "Fahrenheit Temp: " + fTemp;
    result.style.color = "green";
  }
};

// event listener
button.addEventListener("click", convert);
