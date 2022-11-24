// ALL THE BUTTONS ON THE CALCULATOR DEFINED // NUMBERS DEFINED WITHIN AN ARRAY
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

//DISPLAY ELEMENTS DEFINED THEY ARE SET AS DIV'S
let displayOne = document.querySelector(".display-1");
let displayTwo = document.querySelector(".display-2");

// VARIABLES DEFINED THAT STORE THE VALUE OF THE EVENT 
let number = "";
let symbol = "";


// EVENT WHERE THE NUMBERS WHEN CLICKED SHOW IN THE DISPLAY

numbuttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    displayOne.innerHTML += event.target.innerHTML;
  });
});



// THIS FUNCTIONS ADDS VALUE TO THE NUMBER AND THE SYMBOL TO THE 
// VARIABLE WHILST DISPLAYING THIS WHEN EVENT IS CALLED.

const calculationTotal = (e) => {
  number = Number(displayOne.innerHTML);
  symbol = e.target.innerText;

  displayOne.innerHTML = "";
  displayTwo.innerHTML = number + symbol
};

divideSymbol = divideSymbol.addEventListener("click", calculationTotal);
timesSymbol = timesSymbol.addEventListener("click", calculationTotal);
minusSymbol = minusSymbol.addEventListener("click", calculationTotal);
plusSymbol = plusSymbol.addEventListener("click", calculationTotal);


// RESETS THE DISPLAYS TO HAVING NOTHING IN THEM

const reset = (event) => {
  displayOne.innerHTML = "";
  displayTwo.innerHTML = "";
};
cSymbol.addEventListener("click", reset);


// FUNCTION FOR WHEN THE EQUAL EVENT HAPPENS THE MATHS IS DONE (PLUS, TAKE, TIMES, DIVIDE)

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


// FUNCTION FOR THE PERCENTAGE BUTTON TO WORK

const percent = (event) => {
  number = Number(displayOne.innerHTML);
  number = number / 100;
  displayOne.innerHTML = number;
};

percentageSymbol.addEventListener("click", percent);

// FUNCTION TO TURN NUMBER IN THE DISPLAY TO NEGATIVE OR POSITIVE

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




