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

//element for displaying the output of my functions
let displayOne = document.querySelector(".display-1");
let displayTwo = document.querySelector(".display-2");

let number = "";
let symbol = "";

//This input the numbers into display with a click event

numbuttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    displayOne.innerHTML += event.target.innerHTML;
  });
});

//function and click events to return the add/take/divide/times of a sum
const totalSum = (e) => {
  number = Number(displayOne.innerHTML);
  symbol = e.target.innerHTML;
  console.log(symbol);
  displayOne.innerHTML = ""
  console.log(number)

};
plusSymbol = addEventListener("click", totalSum);








// Takes the 0 away from the display when clicked

const reset = (e) => {
displayOne.innerHTML = ""
}
cSymbol.addEventListener("click", (reset))







// function button that uses all the function buttons

const equals = (event) => {
    if (symbol === "+") {
        number += Number(displayOne.innerHTML)
        displayOne.innerHTML = number
    } 
}

equalSymbol.addEventListener("click", equals)



//function to store result in first

////function and click event to show the current value as a percentage

//function and click event to clear the output and reset number value to 0

//function and click event to make numbers negative

//equals button will perform all of the tasks that the symbols require using if statements.
