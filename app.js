// getting all the elements
let display = document.getElementById('display');
let delKey = document.getElementById('del');
let elements = document.querySelectorAll('#elements');
let equalBtn = document.getElementById('equal');

// functions
function clearDisplay() {
 display.value = '';
}

function getResult() {
 display.value = eval(display.value);
}

// event listerns
delKey.addEventListener('click', clearDisplay);
elements.forEach((ele) => {
 ele.addEventListener('click', () => {
  eleValue = ele.value;
  display.value += eleValue;
 });
});

equalBtn.addEventListener('click', getResult);
