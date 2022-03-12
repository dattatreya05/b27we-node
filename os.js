// OS- Info on CPU, memory, directories, etc.

const os = require('os');
console.log("Total ram available", os.totalmem());
// console.log("Total ram available in GB", os.totalmem() / 1024 / 1024 / 1024);
console.log("Total ram available in GB", os.totalmem() / Math.pow(1024, 3));

console.log("Free ram available", os.freemem());

console.log("Free ram available", os.freemem() / Math.pow(1024, 3));

console.log("OS version", os.version());

console.log("OS Cpus", os.cpus());


