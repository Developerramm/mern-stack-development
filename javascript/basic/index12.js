console.log("Ram Kumar");

console.log("Javascript String");

let name = "Ram Kumar";
console.log(name);
console.log(name.length);

console.log(`My name is ${name}`);

let result = name.indexOf("Kumar");
console.log(result);
result = name.indexOf("K");
console.log(result);
result = name.indexOf("u");
console.log(result);

let text = "Maniyari";
console.log(text);
result = Array.from(text);
console.log(result);
result.map((item) => {
  console.log(item);
});

text = "Hello Javascript this is our world best Javascript course";
result = text.lastIndexOf("best");
console.log(result);
console.log(text.indexOf("best"));

result = text.search("this");
console.log(result);
result = text.search("best");
console.log(result);
result = text.search("ram");
console.log(result);

result = text.includes("best");
console.log(result);
result = text.includes("Ram");
console.log(result);

result = text.startsWith("Hello");
console.log(result);

result = text.startsWith("Ram");
console.log(result);

result = text.endsWith("course");
console.log(result);

result = text.endsWith("ram");
console.log(result);
console.log(text.endsWith("e"));
console.log(text.endsWith("se"));
console.log(text.endsWith("rse"));

text = "Hello Javascript this is our world best Javascript course";

let startIndex = text.indexOf("best");
console.log(startIndex);
let part = "best";

let newString = text.slice(startIndex, startIndex + part.length);
console.log(newString.toUpperCase());

newString = text.substring(startIndex, startIndex + part.length);
console.log(newString);

result = text.replaceAll("Javascript", "Jython");
console.log(result);

text = "Hello Javascript this is our world best Javascript course";

console.log(text.charAt(4));
console.log(text.charAt(5));
console.log(text.charAt(6));

console.log(text.charCodeAt(4));
console.log(text.charCodeAt(0));

text = "apple,banana,grapes,mango";
console.log(text);
let newArrStr = text.split(",");
console.log(newArrStr);
newArrStr = text.split(",").reverse().join();
console.log(newArrStr);
