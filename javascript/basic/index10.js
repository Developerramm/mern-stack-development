console.log("EC6 tutorial here");

var num = 10;
console.log(num);
var num = 20;
console.log(num);

let name = "Ram Kumar";
console.log(name);
// let name = "Manoj";
name = "Manoj";
console.log(name);

const price = 200;
console.log(price);
// price = 300;
console.log(price);

console.log("Hello");

if (true) {
  const num1 = 10;
  console.log(num1);
}

// num1 = 20;
// console.log(num1)

if (true) {
  var sum = 20;
  console.log(sum);
}

console.log(sum);

// template literal or string interpolation

let firstName = "Ram";
let lastName = "Kumar";

console.log(firstName + lastName);

let fullName = `${firstName} ${lastName}`;
console.log(fullName);

let age = 29;

let message = `I am ${age} years old`;

console.log(message);

let multiLine = `this is 
multiLine string here
now we write here`;
console.log(multiLine);

const add = (a = 10, b = 30) => {
  let result = `The sum of ${a} and ${b} is ${a + b}`;
  return result;
};

console.log(add(3, 4));
console.log(add());

console.log(add(30, 39));

const square = a => `The square is ${a} is ${a * a}`;
console.log(square(4))
console.log(square(5));

