"use strict";
// Access data
let namee = document.querySelector(".title");
let age = document.querySelector(".age");
let intro = document.querySelector(".intro");
let btn = document.querySelector("button");
let githubLink = document.querySelector("a");
let container = document.querySelector(".switchMood");

console.log(namee);

// Changing Content
namee.innerHTML = "Ali Raza";
age.innerText = 31;

// Changing Attributes
console.log(githubLink);
githubLink.setAttribute("href", "updatelink.com");
console.log(githubLink);

// Adding Element
let newElement = document.createElement("h3");
newElement.innerHTML = "Pakistan";
console.log(newElement);
document.body.appendChild(newElement);

// Changing Styles
namee.style.color = "yellow";
namee.style.background = "green";

age.style.padding = "90px";

// by classes

const clickMe = () => {
  console.log("Button Clicked");
  namee.innerHTML = "Abdullah";
  age.innerHTML = 25;
  newElement.innerHTML = "USA";
  intro.innerHTML = "A ComputeR ENGINEER";

  age.style.background = "red";
  age.style.color = "white";
};

// Last
btn.addEventListener("click", clickMe);
