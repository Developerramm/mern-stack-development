console.log("Sync and async code ");

let fun2 = () => {
  console.log("fun2 start and ends");
};

let fun1 = () => {
  console.log("fun1 is start");
  fun2();
  console.log("fun1 ends ");
};

fun1();
