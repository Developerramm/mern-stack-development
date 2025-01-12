console.log("Node js learning here");
console.log("Fs Module in node js");

const fs = require("fs");

const path = require("path");

const fileName = "text.txt";

const filePath = path.join(__dirname, fileName);
console.log(__filename);

const wiriteFile = fs.writeFileSync(
  fileName,
  "This is fs module updated here hahahaha"
);

// console.log(wiriteFile);

let readFile = fs.readFileSync(filePath, "utf-8");
console.log(readFile);

// update file data
fs.appendFileSync(
  filePath,
  "\nRam Kumar maniyari Riga road sitamarhi",
  "utf-8"
);
readFile = fs.readFileSync(filePath, "utf-8");
console.log(readFile);

// delete file from server

// const fileDelete = fs.unlinkSync(filePath)
// console.log(fileDelete);

fs.renameSync(fileName, "ram.txt");
