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


