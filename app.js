let num1 = 5;
let num2 = 3;

function sum(a, b) {
  return a + b;
}

function difference(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

console.log(sum(num1, num2));
console.log(difference(num1, num2));
console.log(multiplication(num1, num2));
console.log(division(num1, num2));

const sumArrow = (a, b) => a + b;
const differenceArrow = (a, b) => a - b;
const multiplicationArrow = (a, b) => a * b;
const divisionArrow = (a, b) => a / b;

console.log(sumArrow(num1, num2));
console.log(differenceArrow(num1, num2));
console.log(multiplicationArrow(num1, num2));
console.log(divisionArrow(num1, num2));