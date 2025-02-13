// console.log("Sync and async code ");

// let fun2 = () => {
//   console.log("fun2 start and ends");
// };

// let fun1 = () => {
//   console.log("fun1 is start");
//   fun2();
//   console.log("fun1 ends ");
// };

// fun1();

let fun2 = () => {
  setTimeout(() => {
    console.log("Fun2 start and ends ");
  }, 2000);
};

let fun1 = () => {
  console.log("fun1 is start");
  fun2();
  console.log("Fun1 is ended");
};

fun1();
