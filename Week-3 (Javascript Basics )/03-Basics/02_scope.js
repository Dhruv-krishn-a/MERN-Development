let d=10
const e=20
var f=30

console.log(d);
console.log(e);
console.log(f);


// let and const are in local scope and var is declared inside , but is available outside, which is not good.
if(true){
    let a=10
    const b=20
    var c =30
}
console.log(a);
console.log(b);
console.log(c);

let g = 300
 if (true) {
     let g = 10
     console. log("INNER: ", g);
 }
 console.log(`Outer G ${g}`)