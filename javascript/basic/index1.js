console.log("basic part 2")

const workday = 5;
console.log(workday)

// we can not re assign a value to contant variable
// workday = 2;

let counter = 100;
console.log(counter,typeof(counter))
counter = false;
console.log(counter,typeof(counter))

counter = "ram kumar";
console.log(counter,typeof(counter))

let age;
console.log(age,typeof(age))

let obj = null;
console.log(obj,typeof(obj))

console.log(null == undefined)
console.log(typeof(null == undefined))


let num = 100;
console.log(num,typeof(num))

let price = 20.23;
console.log(price,typeof(price))

console.log(typeof(23.323432))

console.log(Number.MAX_VALUE)
console.log(Number.MAX_VALUE + Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.MIN_VALUE + Number.MIN_VALUE)
console.log(-Number.MIN_VALUE - Number.MIN_VALUE)

console.log(Number.MAX_VALUE - Number.MAX_VALUE)

console.log(Number.MAX_VALUE - Number.MIN_VALUE)

let program = "Javacript";
console.log(program)
console.log(program[0])
program[0] = "R";
console.log(program)
console.log(program[0])

console.log('a'/10)
console.log(NaN == NaN)
console.log(NaN === NaN)
console.log(NaN == undefined)
console.log(NaN === undefined)

console.log(undefined == undefined)
console.log(undefined === undefined)

let s = Symbol();
console.log(s)
console.log(typeof(s))

console.log(Symbol() == Symbol())
console.log(Symbol() === Symbol())
