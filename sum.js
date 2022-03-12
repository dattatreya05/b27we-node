// In normal functions
// function sum(a, b){ 
//     return a + b
// }
// console.log(sum(4, 5));
// console.log("Hello world")

// // By using aaroe functions
// const sum = (a, b) => a + b; 

// console.log(sum(4, 5));
// console.log("Hello world")

console.log(process.argv)
const [, , num1, num2] = process.argv;

const sum = (a, b) => a + b;
console.log(sum(+num1, +num2));