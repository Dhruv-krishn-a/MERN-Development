console.log("this is new node project ")

// we can make our own scripts , npm init and make script in package.json. Run using -- npm run ownscript .
//This is to make config before running the actual project , external libraries needs to be connected before running .



//there will be 100s of codes like thsis in a actual codebase , so we split them into modules .
// function add(a, b){
//     return a+b;
// }

// console.log(add(5,10))

//to use this module -->
//IMPORT HERE ,EXPORT from created file 
const newvar = require('./1-ExportModule');

//USE this module 
console.log(newvar(30,50));

const MultipleObject = require('./1-ExportModule');
console.log(MultipleObject)
console.log(MultipleObject.multiply(5,5));
console.log(MultipleObject.PI)