// date and time

let currDate = new Date();
console.log(currDate);

currDate = new Date("2025-02-12T10:44:09.234");
console.log(currDate);

currDate = new Date(2025, 1);
console.log(currDate);

currDate = new Date(2025, 1, 12);
console.log(currDate);

currDate = new Date(2025, 2, 15, 12, 12);
console.log(currDate);

currDate = new Date();
console.log(currDate.getTime());

console.log(currDate.getFullYear());
console.log(currDate.getMonth());
console.log(currDate.getDate());
console.log(currDate.getDay());

let hours = currDate.getHours();
let minutes = currDate.getMinutes();
let second = currDate.getSeconds();
let time = currDate.getTime();

console.log(hours);
console.log(minutes);
console.log(second);
console.log(time);
