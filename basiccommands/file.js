// 1. Creating the files with the content
// fs- Access file system - We can create any type of files

const fs = require('fs');
const quote = "No beauty shines brighter than that of a good heart 🙂!!!."
fs.writeFile("./awesome.txt", quote, (err) => {
    console.log("Completed writing!!! 👍");
});

// Task-1
// Create the below files with quote2 as the content
// /backup/
// text-1.html
// text-2.html
// text-3.html
// ...
// text-10.html
// const quote2 = "Live more, worry less"
// for (let i = 1; i <=10; i++){
//     fs.writeFile(`./backup/text-${i}.html`, quote2, (err) => {
//         console.log("Completed writing!!! 👍",`text-${i}.html` );
//     });
// }

// // Task 2
// // node file.js 30 -> 30 files to be created
const quote2 = "Live more, worry less 🙂🙂"
console.log(process.argv);
const [, , noOfFiles] = process.argv;
for (let i = 1; i <= noOfFiles; i++){
    fs.writeFile(`./backup/text-${i}.html`, quote2, (err) => {
        console.log("Completed writing!!! 👍",`text-${i}.html` );
    });
}

// 2. Read the files with the content what available in the file.

fs.readFile("./cool.html", "utf-8", (err, contentOfFile) => {
    if(err){
        console.log("Error:", err) // If the file which is required we are not having thwn shows the error message
        return; // early return if we rae not given this when we are getting error we will also get the contentOfFile data.
        // exit the function
    }
    console.log(contentOfFile);
})

// 3. We have to add the data by quote to an existing file

const addQuote = "Dream without fear, love without limits 💖💝💘";
// // writeFile will override content of the file 
// fs.writeFile("./fun.html", addQuote, (err) => {
//     console.log("Completed writing!!! 💖!!!!");
// });

fs.appendFile("./fun.html", "\n" + addQuote, (err) => {
    console.log("Completed appending!!! 💖!!!!");
});

// \n for getting content into newline
// if we are not required we cannot given it.

// 4. how to delete the files with the content
// we have created one file with the delete-file.txt then we are deleted.
fs.unlink("./delete-file.txt", (err) => {
    console.log("Deleted sucessfully");
});

// how to read the directories
// file is in the format of array of files
// fs.readdir("./backup", (err, files) => {
//     console.log("All files", files)
// });

// Task 3
// Delete all the files in backup
fs.readdir("./backup", (err, files) => {
    // we are looping them each and getting each one and then by using unlink we are deleting each file by loop
    files.forEach((fileName) =>
    fs.unlink(`./backup/${fileName}`, (err) => {
        console.log("Deleted sucessfully", fileName);
    }))
});

// synchronous methods - It was not recommended to use
// we have to comment all th code when we are running sync code
const fs = require('fs');
const data = fs.readFileSync("./awesome.txt", "utf-8");
console.log("Sync code", data)