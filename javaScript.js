// ALL THE BUTTONS ON THE CALCULATOR DEFINED
let numbuttons = Array.from(document.querySelectorAll(".num-button"));
let cSymbol = document.querySelector(".c-symbol");
let percentageSymbol = document.querySelector(".percentage");
let divideSymbol = document.querySelector(".divide");
let timesSymbol = document.querySelector(".times");
let minusSymbol = document.querySelector(".minus");
let plusSymbol = document.querySelector(".plus");
let fullstopSymbol = document.querySelector(".full-stop");
let equalSymbol = document.querySelector(".equal");
let plusMinusSymbol = document.querySelector(".plus-minus");

//element for displaying the output of my functions
let displayOne = document.querySelector(".display-1");
let displayTwo = document.querySelector(".display-2");

// Variables that store result of the number or symbol
let number = "";
let symbol = "";

//This input the numbers into display with a click event

numbuttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    displayOne.innerHTML += event.target.innerHTML;
  });
});


// function which has click events that utilise the +/-/divide/times
//function and click events to return the add/take/divide/times of a sum
const calculationTotal = (e) => {
  number = Number(displayOne.innerHTML);
  symbol = e.target.innerText;
  console.log(symbol);
  console.log(e);
  displayOne.innerHTML = "";
  displayTwo.innerHTML = number + symbol
  console.log(number);
  console.log(symbol);
};

divideSymbol = divideSymbol.addEventListener("click", calculationTotal);
timesSymbol = timesSymbol.addEventListener("click", calculationTotal);
minusSymbol = minusSymbol.addEventListener("click", calculationTotal);
plusSymbol = plusSymbol.addEventListener("click", calculationTotal);

// Takes the 0 away from the display when clicked

const reset = (event) => {
  displayOne.innerHTML = "";
  displayTwo.innerHTML = "";
};
cSymbol.addEventListener("click", reset);

// function button that uses all the function buttons

const equals = (event) => {
  displayTwo.innerHTML = "";
  if (symbol === "+") {
    number += Number(displayOne.innerHTML);
    displayOne.innerHTML = number;
  } else if (symbol === "-") {
    number -= Number(displayOne.innerHTML);
    displayOne.innerHTML = number;
  } else if (symbol === "x") {
    number *= Number(displayOne.innerHTML);
    displayOne.innerHTML = number;
  } else if (symbol === "/") {
    number /= Number(displayOne.innerHTML);
    displayOne.innerHTML = number;
  }
};

equalSymbol.addEventListener("click", equals);

////function and click event to show the current value as a percentage

const percent = (event) => {
  number = Number(displayOne.innerHTML);
  number = number / 100;
  displayOne.innerHTML = number;
};

percentageSymbol.addEventListener("click", percent);

//function and click event to make numbers negative

const changeNegative = (event) => {
  number = Number(displayOne.innerHTML);
  if (displayOne.innerHTML.includes("-")) {
    number = Math.abs(number);
    displayOne.innerHTML = number;
  } else {
    number = -Math.abs(number);
    displayOne.innerHTML = number;
  }
};

plusMinusSymbol.addEventListener("click", changeNegative);




