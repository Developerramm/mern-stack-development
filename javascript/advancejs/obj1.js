// javascript object

let product = {
  id: 1,
  name: "Laptop",
  price: 28000,
};

console.log(product);

let person = {
  name: "ram kumar",
  age: 30,
  isStudent: false,
  greet: function () {
    console.log("We are learning javascript");
  },
};

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.isStudent);
person.greet();

person.gender = "male";
console.log(person);
console.log(person.gender);

person.gender = "Female";
console.log(person.gender);

let num1 = 10;
console.log(num1);
function demo() {
  num1 = 30;
  console.log(num1);
}

demo();
console.log(num1);
