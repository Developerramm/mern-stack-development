const { dir } = require("console");
const path = require("path");

console.log("Node js");
// console.log(path)
console.log(__dirname);
console.log(__filename);

const filePath = path.join("Folder","students","data.txt");
console.log(filePath);

const resolvePath = path.resolve(filePath);
const extname = path.extname(filePath);
const baseName = path.basename(filePath);
const dirname = path.dirname(filePath);
const parseData = path.parse(filePath);

console.log(resolvePath);
console.log(extname)
console.log(baseName)
console.log(dirname);
console.log(parseData);

