// ALL THE BUTTONS ON THE CALCULATOR DEFINED
const cSymbol = document.querySelector(".c");
const inputbox = document.querySelector(".input");
const equalSymbol = document.querySelector(".equal");




// arrays for buttons and function buttons
const buttons = Array.from(document.querySelectorAll(".num-button"));
const functionButton = Array.from(
  document.querySelectorAll(".function-button")
);




//element for displaying the output of my functions
let display = document.querySelector(".total-display");

let number = "";
let symbol = "";

//This input the numbers into display

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    return (display.innerHTML += button.innerHTML);
  });
});

//function and click events to return the add/take/divide/times of a sum

functionButton.forEach((fButton) => {
  fButton.addEventListener("click", () => {
    symbol += fButton.innerHTML;
    return (display.innerHTML += fButton.innerHTML);
  });
});


// Takes the 0 away from the display when clicked
cSymbol.addEventListener("click", () => {
  display.innerHTML = "";
});


//function button that uses equals
equalSymbol.addEventListener("click", () => {
  if (symbol === "%") {
    alert("symbol has been set correctly")
    display.innerText = number;
  } else if (symbol === "+") {
    number = number + Number(display.innerHTML);
    display.innerHTML = answer;
  }
});








////function and click event to show the current value as a percentage

//function and click event to clear the output and reset number value to 0

//function and click event to make numbers negative

//equals button will perform all of the tasks that the symbols require using if statements.
