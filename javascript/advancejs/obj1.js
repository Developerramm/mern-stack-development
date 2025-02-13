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

let obj = {
  name: "Ram",
  age: 20,
  isRunner: function () {
    console.log(this.name + " is running daily");
  },
};

console.log(obj);
obj.isRunner();

let newObj = Object.assign({}, obj);

console.log(newObj);
newObj.age = 30;
console.log(obj);
console.log(newObj);

console.log(product);
let keys = Object.keys(product);
console.log(keys);
let values = Object.values(product);
console.log(values);

console.log(Object.entries(product));

// check two object are equal or not

let compareTwoObj = (objA, objB) => {
  return JSON.stringify(objA) == JSON.stringify(objB);
};

let objA = { name: "ram", age: 30, city: "Noida" };
let objB = { name: "ram", age: 30, city: "Noida" };

let objC = { name: "Sarita", age: 24, city: "Noida" };
console.log(objA == objB); // false
// console.log(Object.toJSON(objA) == Object.toJSON(objB))
// let eq = Object.toJSON(objA) == Object.toJSON(objB)
// console.log(eq)

// console.log(objA.length)

console.log(JSON.stringify(objA) == JSON.stringify(objB));
