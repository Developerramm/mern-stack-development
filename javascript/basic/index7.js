console.log("Control flow statement");

var temperature = 37;

if (temperature > 30) {
  console.log("Let's Go to Beach");
} else {
  console.log("Ham beach par nahi ja sakte hai");
}

let userAge = 20;
let isCitizen = true;
let isRegistered = false;

if (userAge >= 20) {
  if (isCitizen) {
    if (isRegistered) {
      console.log("You are eligible to vote");
    } else {
      console.log("You are not registered to vote");
    }
  } else {
    console.log("You are not eligible due to citizenship status");
  }
} else {
  console.log("You are not eligible to vote");
}

// checka number which is even or odd

let number = 8;

if (number % 2 == 0) {
  console.log("This is even number");
} else {
  console.log("number is odd");
}

// check number is positie or negative or zero

number = 5;

if (number === 0) {
  console.log("The number is zero");
} else if (number > 0) {
  console.log("number is positive");
} else {
  console.log("number is negative");
}

// switch statement
var day = "Monday";

switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  case "Wednesday":
    console.log("Today is Wednesday");
    break;
  case "Thursday":
    console.log("Today is Thursday");
    break;
  case "Friday":
    console.log("Today is Friday");
    break;
  case "Saturday":
    console.log("Today is Saturday");
    break;
  default:
    console.log("Today is Sunday");
}

// while loop in javaScript
console.log("while loop in javaScript");
let i = 1;
while (i <= 10) {
  console.log(i * 5);
  i = i + 1;
}

// do while loop

console.log("Do while loop in javaScript");
i = 1;
do {
  console.log(i);
  i = i + 1;
} while (i <= 10);

// for loop in javascript
console.log("For loop in javaScript");
console.log("Printing table of 5");
for (let i = 1; i <= 10; i++) {
  console.log(i + " * " + 5 + " = " + i * 5);
}

i = 1;

while (i <= 5) {
  let count = i;
  console.log(i);
  while (count <= i) {
    console.log("*");
    count = count + 1;
  }
  i = i + 1;
}
