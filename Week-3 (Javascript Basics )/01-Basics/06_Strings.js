const name = "DhruvKrishna"
const repoCount = 2
//this is a very old methord.
// console.log(name + repoCount + " Value");


//Use this instead 
//The method of concatenating strings using placeholders like ${name} and ${repoCount} within a template string (denoted by backticks) is called "template literals" or "template strings".

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('DhruvKrishnaNew')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('K'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Dhruv    "
console.log(newStringOne);
console.log(newStringOne.trim());


//To convert to Url encoding
const url = "https://Dhruv.com/Dhruv%20Krishna"

console.log(url.replace('%20', '-'))

console.log(url.includes('Dhruv'))

console.log(gameName.split(' '));