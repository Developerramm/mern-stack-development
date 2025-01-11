console.log("javascript");

// calculate sum of 1 to 10

let sum = 0;
// debugger;
for (let i = 1; i <= 10; i++) {
  sum += i;
  //   console.log(sum);
}

console.log("The sum is " + sum);

// check prime number

let number = -6;

if (number < 0) {
  number = -number;
}
if (number == 2 || number == 3) {
  console.log("number is prime");
}

let flag = true;
for (let i = 2; i < number; i++) {
  if (number % i == 0) {
    flag = false;
    break;
  }
}

if (flag) {
  console.log("number is prime");
} else {
  console.log("number is not a prime number");
}

// chech whether a year is leap year or not
let year = 2025;

if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log("Year is a leap year");
} else {
  console.log("Year is not a leap year");
}

// pattern printing here

for (let i = 1; i <= 5; i++) {
  var pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern = pattern + " * ";
  }
  console.log(pattern);
}
