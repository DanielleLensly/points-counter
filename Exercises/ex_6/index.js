let num1 = 8;
let num2 = 2;
let calcSum = document.getElementById("sum-el");
let sumMsg = "Sum: ";

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

function add() {
  let calcAmount = num1 + num2;
  calcSum.textContent = sumMsg + calcAmount;
  console.log(calcSum.textContent);
  calcAmount = 0;
}

function subtract() {
  let calcAmount = num1 - num2;
  calcSum.textContent = sumMsg + calcAmount;
  console.log(calcSum.textContent);
  calcAmount = 0;
}

function divide() {
  let calcAmount = num1 / num2;
  calcSum.textContent = sumMsg + calcAmount;
  console.log(calcSum.textContent);
  calcAmount = 0;
}

function multiply() {
  let calcAmount = num1 * num2;
  calcSum.textContent = sumMsg + calcAmount;
  console.log(calcSum.textContent);
  calcAmount = 0;
}
