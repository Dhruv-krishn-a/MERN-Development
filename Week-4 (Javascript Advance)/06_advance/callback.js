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