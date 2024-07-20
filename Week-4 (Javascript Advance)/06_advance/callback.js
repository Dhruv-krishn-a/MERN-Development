<<<<<<< HEAD:06_advance/callback.js

=======
>>>>>>> 3e0520a49ca9fe3170bcdf9c31170bb0e6247f82:Week-4 (Javascript Advance)/06_advance/callback.js
function sum(a){
    return a*a
}

function sumOfSomething(a,b,fn){
    let square1=fn(a)
    let square2=fn(b)
    return square1 + square2
}

let ans = sumOfSomething(5,10, sum)
console.log(ans)
function onDone(content){
    console.log(content)
}
readfile("a.txt" , onDone)
console.log(" hi there ");