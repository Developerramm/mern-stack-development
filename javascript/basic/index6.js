console.log("Javascript operator");
console.log("Arithmetic Operator");

console.log(10 + 3);
console.log(234 - 32);
console.log(23 * 10);
console.log(32 / 5);
console.log(2 ** 3);
console.log(19 % 4);
console.log("Hello" / 2);

console.log(0.1 + 0.2);

let sum = 0.2 + 0.4;
console.log(sum.toFixed(2));

var result = 55 * "Bachpan";
console.log(result);
console.log(typeof result);

var str1 = "Hello";
var str2 = "World";
console.log(str1 + str2);
console.log("5" + 3);
result = "5" + 3;
console.log(result);
console.log(typeof result);

result = "5" - 3;
console.log(result);
console.log(typeof result);

// comparision operator
console.log("Comparision operators");

console.log(5 == 5);
console.log(3 > 4);
console.log(3 < 4);
console.log(5 != 3);
console.log(3 <= 5);
console.log(5 >= 5);
console.log(5 == "5");
console.log(5 === "5");
console.log(5 != "5");
console.log(5 !== "5");
console.log(5 < "ram");
console.log(5 > "ram");

var num1 = 1;
var num2 = "1";

if (num1 == num2) {
  console.log("Equal value");
} else {
  console.log("Not Equal value");
}

if (num1 === num2) {
  console.log("Equal value");
} else {
  console.log("Not Equal value");
}

// logical operator

if (num1 && num2) {
  console.log("Both are true");
}

if (num1 || num2) {
  console.log("One of these is Equal");
}

if (num1 != "ram") {
  console.log("Ram kumar");
}

console.log(!false);
console.log(!true);

let age = 18;
let drivingLicence = true;

if (age >= 18) {
  if (drivingLicence) {
    console.log("You can drive");
  } else {
    console.log("You must have to drivingLicence to drive on the road");
  }
} else {
  console.log("sorry Your age is below 18");
}

result = age > 18 ? "eligible" : "Not Eligible";
console.log(result);

console.log(2 < 12 < 2);
console.log(true + true);
console.log(5 < 4 <= 0);

console.log(true - true);

console.log(10 + 10 + "20");
console.log("20" + 10 + 10);
console.log(10 + "20" + 10);
