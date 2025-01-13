console.log("File system module");

const fs = require("fs");
const path = require("path");

const fileName = "fsAsync.txt";
const filePath = path.join(__dirname, fileName);

console.log(filePath);
console.log(path.extname(filePath));

// write file
fs.writeFile(filePath, "This is node js tutorial here", "utf-8", (err) => {
  if (err) {
    console.error(err);
  }
});

// read file in node js
fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});

fs.appendFile(filePath, "\nRam Kumar Maniyari Sitamarhi", "utf-8", (err) => {
  if (err) {
    console.error(err);
  }
});

// read file in node js
fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});

// delete file
fs.unlink(filePath, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File has been deleted");
  }
});
