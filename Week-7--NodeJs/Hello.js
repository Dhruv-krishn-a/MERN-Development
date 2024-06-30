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
const math = require("./add-module");

//USE this module 
console.log(math(5,10));