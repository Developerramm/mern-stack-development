let person = [
  { name: "Ram Kumar", age: 30, salary: 65000 },
  { name: "Sarita kumari", age: 24, salary: 35000 },
  { name: "Sanchit kumar", age: 45, salary: 125000 },
  { name: "Mohit kumar", age: 22, salary: 25000 },
];

localStorage.setItem("name", "Ram Kumar");
localStorage.setItem("age", 30);
localStorage.setItem("isProgrammer", true);

console.log(localStorage.getItem("name"));
console.log(localStorage.getItem("age"));
console.log(localStorage.getItem("isProgrammer"));

localStorage.setItem("data", JSON.stringify(person));
let data = localStorage.getItem("data");
console.log(JSON.parse(data));
