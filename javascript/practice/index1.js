// const getStudentData = () => {
//   setTimeout(() => {
//     console.log("My name is ram kumar");
//     setTimeout(() => {
//       console.log("I am from maniyari ");
//       setTimeout(() => {
//         console.log("City is Sitamarhi ");
//         setTimeout(() => {
//           console.log("I like coding ");
//           setTimeout(() => {
//             console.log("How are you ?");
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// };
// getStudentData();

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hi, I miss you ");
  }, 2000);
});

promise
  .then((result) => {
    console.log(result);
  })

  .catch((error) => {
    console.log(error);
  })

  .finally(() => {
    console.log("code is running fine here");
  });

console.log(promise);
