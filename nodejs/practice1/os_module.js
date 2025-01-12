const os = require("os");

// console.log(os);
console.log("OS module in node js");
console.log(os.arch());
console.log(os.totalmem());
console.log(os.freemem());
// console.log(os.cpus())
console.log(os.homedir());
console.log(os.type());

let currentOS = {
  name: os.type(),
  architecture: os.arch(),
  platform: os.platform(),
  release: os.release(),
  version: os.version(),
};

console.log(currentOS);
console.log(os.userInfo());
