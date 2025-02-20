// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".
let textStr = "Something went wrong, please try again";
let error = document.getElementById("error");

function errorButton() {
  error.textContent = textStr;
}
