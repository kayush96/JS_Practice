//Make a function named ten that takes in zero arguments and return the value 10. 
//Try using both () and _ syntax.
const ten = () => 10;
const tenZero = _ => 10;

console.log(ten());
console.log(tenZero());
//Make a function named logger that takes in one argument. It logs the argument you passed into it.
//Try it with and without parenthesis ().
const logger = (arg1) => { console.log(arg1); }
const logger1 = arg => { console.log(arg) };

logger("Hello");
logger1("World");
//Make a function called add that adds two numbers together. Try it with and without implicit returns.
const add = (num1, num2) => num1 + num2;

console.log(add(2, 7));

const add1 = (num1, num2) => {
    return num1 + num2;
}

console.log(add1(2, 5));
//Make a function called multiply that multiplies two numbers together. Try it with and without 
//implicit returns.

const multiply = (num1, num2) => num1 * num2;

console.log(multiply(5, 10));

const multiply1 = (num1, num2) => {
    return num1 * num2;
}

console.log(multiply1(4, 8));