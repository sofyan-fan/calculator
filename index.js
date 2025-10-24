const display = document.querySelector(".container");
const buttons = document.querySelectorAll(".number");
const clear = document.querySelector(".clear")
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");


let num1;
let num2;
let operatorClicked;


function add(a, b) {
  return a + b;
};

function subtract(a, b) {
  return a - b;
};

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

console.log(operatorClicked);


// Click number to show on display
buttons.forEach(function (button) {
  button.addEventListener('click', () => {
    display.textContent += button.textContent;
  })
});

operators.forEach(button => {
  button.addEventListener("click", (event) => {
    num1 = display.textContent;
    console.log(num1);
    display.textContent = "";

    if (event.target.textContent) {
      operatorClicked = event.target.textContent
    }
    console.log(operatorClicked)
  })
});

equal.addEventListener("click", () => {

  num2 = display.textContent;

  if (operatorClicked == "+") {
    display.textContent = add(parseInt(num1), parseInt(num2));
  } else if (operatorClicked == "-") {
    display.textContent = subtract(parseInt(num1), parseInt(num2));
  } else if (operatorClicked == "/") {

    display.textContent = divide(parseInt(num1), parseInt(num2));
  } else if (operatorClicked == "x") {
    display.textContent = multiply(parseInt(num1), parseInt(num2))

  }
  operatorClicked = ""
});

//Clear display
clear.addEventListener("click", () => {
  display.textContent = " ";
  operatorClicked = "";
});
