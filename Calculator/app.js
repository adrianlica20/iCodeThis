const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const zero = document.getElementById('0');
const plusOrMinus = document.getElementById('plus-or-minus');
const dot = document.getElementById('dot');
const equal = document.getElementById('equal');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const multiplication = document.getElementById('multiplication');
const division = document.getElementById('division');
const erase = document.getElementById('erase');
const c = document.getElementById('C');
const ce = document.getElementById('CE');

const result = document.getElementById('result');
const display = document.getElementById('display');

one.addEventListener('click', () => {
  display.textContent = '1';
});
two.addEventListener('click', () => {
  display.textContent = '2';
});
three.addEventListener('click', () => {
  display.textContent = '3';
});
