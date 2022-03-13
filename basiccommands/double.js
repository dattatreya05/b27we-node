
// For the passing the value in the terminal itself[i.e., by user has passing the value] we are having some global variables "process" is having so many things one thing is argv
// argv is actually an array
// process.argv passes three values i.e path to node.js, path to file and last one is value
console.log(process.argv);
// we are using array destructuring for destructure the values
const [, , num] = process.argv;

const dbl = (n) => n * 2;
console.log(dbl(num));
console.log(dbl(process.argv[2]));

// console.log(document);
// console.log(window);

// In this environment we are not having above two i.e, document and window variables
// If we take all setTimeout, setIntervala, clearInterval and clearTimeout all will be in the window so for this purpose we are having the global here
// console.log(global);