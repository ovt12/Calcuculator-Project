// ALL THE BUTTONS ON THE CALCULATOR DEFINED

const cSymbol = document.querySelector(".c");
const percentageSymbol = document.querySelector(".percentage");
const divideSymbol = document.querySelector(".divide");
const oneSymbol = document.querySelector(".sec-1");
const twoSymbol = document.querySelector(".sec-2");
const threeSymbol = document.querySelector(".sec-3");
const timesSymbol = document.querySelector(".times");
const fourSymbol = document.querySelector(".sec-4");
const fiveSymbol = document.querySelector(".sec-5");
const sixSymbol = document.querySelector(".sec-6");
const minusSymbol = document.querySelector(".minus");
const sevenSymbol = document.querySelector(".sec-7");
const eightSymbol = document.querySelector(".sec-8");
const nineSymbol = document.querySelector(".sec-9");
const plusSymbol = document.querySelector(".plus");
const zeroSymbol = document.querySelector(".sec-0");
const fullstopSymbol = document.querySelector(".full-stop");
const equalSymbol = document.querySelector(".equal");
const inputbox = document.querySelector(".input");


// HEADER DEFINED
const h1 = document.querySelector(".body--h1");




// GET INPUT TO DISPLAY ZERO
    cSymbol.addEventListener("click", () => {
        h1.innerHTML = 0;
    });

// ADDS ONE INTO H1 TAG
    oneSymbol.addEventListener("click", () => {
        let oneSymbol = 1;
       h1.innerHTML = h1.innerHTML + oneSymbol;
    });

// ADDS TWO INTO H1 TAG
    twoSymbol.addEventListener("click", () => {
        let twoSymbol = 2;
        h1.innerHTML = h1.innerHTML + twoSymbol;
    });

// EQUALS BOTH THE ONE AND TWO 
    equalSymbol.addEventListener("click", () => {
        
        let equalSymbol = oneSymbol + twoSymbol
        h1.innerHTML = h1.innerHTML + equalSymbol
    })

   
