console.log("javascript function");

function sum(number1, number2) {
  return number1 + number2;
}

var result = sum(10, 20);
console.log(result);

result = sum(20, 30);
console.log(result);

result = sum(100, 200);
console.log(result);

// function with parameter
function greet(parameter) {
  console.log("Hello " + parameter);
}

greet("Ram kumar");

greet("Pooja Kumar Singh");

// greet("Piku")

function arithmetic() {
  let number1 = 20;
  let number2 = 10;

  sum = number1 + number2;
  sub = number1 - number2;
  product = number1 * number2;
  div = number1 / number2;

  console.log("sum " + sum);
  console.log(sub);
  console.log(product);
  console.log(div);
}

arithmetic();

// function expresssion

let expresssion = function sum(a, b) {
  return a + b;
};

console.log("Ram KUmar");

result = expresssion(10, 20);
console.log(result);

console.log(expresssion("Ram ", "Kumar"));

// anonymous function

var result = function (a, b) {
  console.log("I am anonymous function");
  return a + b;
  console.log("I am after return keyword");
};

console.log(result(19, 20));

// IIFE function
(function (a, b) {
  console.log(a + b);
  console.log("IIFE here");
})(10, 20);

console.log("ram kumar");
