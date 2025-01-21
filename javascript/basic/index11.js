console.log("Javascript tutorial here");

console.log("Javascript array tutorial here ");

let person = ["Ram", "Hari", "Sita", "Bishal", "Geeta"];
console.log(person);
console.log(typeof person);
console.log(person.length);
console.log(person.at(1));
console.log(person.at(-1));
console.log(person.at(0));

// console.log(person[-1])

// modify array
person[2] = "Mohit";
console.log(person.at(2));

// array contructor
let fruits = new Array("Apple", "Banana", "Grapes", "Mango");
console.log(fruits);
console.log(typeof fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits.at(2));
console.log(fruits.at(1));
console.log(fruits.at(0));

// array iteration
// using for of loop
let ans = "";
for (let item of fruits) {
  ans += " " + item;
  // console.log(item)
}
console.log(ans);

// for in loop
for (let item in fruits) {
  console.log(fruits[item]);
}

person.forEach((item, index) => {
  console.log(item, index);
});

// using map method

person.map((item, index) => {
  console.log(item, index);
});

let num = [1, 2, 3, 4, 5];
num.forEach((item) => {
  console.log(item * 2);
});

let newArray = num.map((item) => {
  return item * 2;
});

console.log(num);
console.log(newArray);

num.push("Ram");
console.log(num);
num.push("Mohan", "Hari", "Ram");
console.log(num);

let item = num.pop();
console.log(item);

console.log(num);

console.log(num.unshift("ram"));
console.log(num.shift());

console.log(num.splice(3, 3, "Apple", "Banana"));
console.log(num);

console.log(num.indexOf("Apple"));

console.log(num.lastIndexOf("Banana"));

console.log(num.includes("Apple"));
console.log(num.includes(2));

let numberArray = [1, 2, 3, 4, 5, 6, 8, 9, 10];
console.log(numberArray);

// let num1 = numberArray.find((item)=>{
//   return (item % 2 == 0);
// })

// console.log(num1)

let result = numberArray.findIndex((item) => {
  // console.log(item)
  return item > 10;
});

console.log(result);

result = numberArray.filter((item) => {
  return item > 10;
});
console.log(result);

var givenElement = 8;
result = numberArray.filter((item) => {
  return item !== givenElement;
});
console.log(result);

fruits = ["Mango", "Guavea", "Apple", "Grapes", "Banana"];

console.log(fruits);

result = fruits.sort();
console.log(result);
console.log(fruits);

numbers = [1, 4, 9, 3, 9, 2, 7, 6, 5, 10, 23, 110];
numbers.sort((a, b) => a - b);
console.log(numbers);
numbers.sort((a, b) => b - a);
console.log(numbers);

result = numbers.map((item) => item * item);
console.log(result);

let names = ["ram", "shyam", "mohan", "horil"];
console.log(names);

result = names.map((item) => {
  // let char = item.charAt(0).toUpperCase();
  // item = item.splice(0,1,char);
  // // item = item.replace(0, char) + item;
  // return item;
});
// console.log(result);

// console.log(names[0].charAt(0).toUpperCase());
