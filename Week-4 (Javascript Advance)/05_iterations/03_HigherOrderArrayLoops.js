// for of Loop, Array and object specific Loops

// ["", "", ""] , Arrays 
// [{}, {}, {}] , Objects

//For of Loop
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world!"
for (const IterateStrings of greetings) {
    console.log(`Each char is ${IterateStrings}`)
}

// Maps, 

const map = new Map()
//values will be unique
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}
//objects are not iteratable , maps are.
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }