// date and time
let date = new Date();
console.log(date);

console.log(date.toLocaleString());
console.log(date.toDateString());
console.log(date.toLocaleTimeString());

console.log(Date.now());

let addDaysToDate = (date, extraData) => {
  console.log(date);
  console.log(date.getDate());
  console.log(date.setDate(7));
  let newDate = date.setDate(date.getDate() + extraData);
  console.log(new Date(newDate));
};

date = new Date("2025-02-12");

let newDate = addDaysToDate(date, 7);
