let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let clearEl = document.getElementById("clear-el");
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function decrement() {
  count -= 1;
  countEl.textContent = count;
}

function clearCount() {
  let countStr = count + " - ";
  clearEl.textContent += countStr;
  countEl.textContent = 0;
  console.log(count);
  count = 0;
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
}
