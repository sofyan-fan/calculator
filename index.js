
const display = document.querySelector(".container");
const buttons = document.querySelectorAll(".number");
const clear = document.querySelector(".clear")
const operator = document.querySelector(".operator");
const equal = document.querySelector(".equal");

let num1; 
let num2;
let operatorClicked = false;

function add (a, b){
  return a + b;
}



console.log(operatorClicked)



// Click number to show on display
buttons.forEach(function(button){
  button.addEventListener('click', () =>{
    display.textContent += button.textContent;
  })
});

operator.addEventListener("click", () =>{
  num1 = display.textContent;
  console.log(num1);
  display.textContent = "";
});

equal.addEventListener("click", () =>{

  num2 = display.textContent;
  

  display.textContent = add(parseInt(num1), parseInt(num2));
})



//Clear display
clear.addEventListener("click", () =>{
  display.textContent = " ";
}
);

//Store 2 numbers





 







function add (a, b){
  return a + b;
}













