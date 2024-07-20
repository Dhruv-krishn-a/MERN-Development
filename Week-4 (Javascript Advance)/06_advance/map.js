<<<<<<< HEAD:06_advance/map.js
const arr = [5,1,3,2,6]
function double(x){
    return x*2;
}
const output = arr.map(double);
console.log("Double of array");
console.log(output)

function binary(x){
    return x.toString(2);
}
const binaryoutput = arr.map(binary);
console.log("Binary of array");
console.log(binaryoutput);

function Triple(x){
    return x*3;
}
const tripleoutput = arr.map(Triple);
console.log("triple of array");
console.log(tripleoutput);

// Advance syntax
const advanceoutput = arr.map((x) => {
    return x*x;
})
console.log("this is advance syntax");
console.log(advanceoutput);
=======
//these are maps
function transform(i){
    return 2*i
}

const input = [1,2,3,4,5,6,7]

const ans = input.map(transform)
console.log(`This is the array before ${input}`)
console.log(ans)

>>>>>>> 3e0520a49ca9fe3170bcdf9c31170bb0e6247f82:Week-4 (Javascript Advance)/06_advance/map.js
