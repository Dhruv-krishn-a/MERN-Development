//to declare an array(collection of elements)
//Array in js are resizeable 
const myArray =[0,1,2,3,4,5]
const MyArray2 = new Array(1,2,3,4)
console.log(myArray[1]);

//array methords
myArray.push(6)//to add a value in arrray
console.log(myArray);
myArray.pop()//pops the last value 
myArray.unshift(9)//to add in array , time computing in large values .
console.log(myArray)

console.log(myArray.includes(9))
console.log(myArray)
console.log(myArray.indexOf(9))

const newArr = myArray.join() //to bind and convert to string
console.log(myArray)
console.log(typeof(myArray))

//slice and Splice
console.log("this is slice and splice ")
console.log("This is original array: ", myArray)
const myn1 =myArray.slice(1,3)
console.log("Array my2 (slice)",myn1)
console.log("Original array after SLICE ", myArray)

const myn2 =myArray.splice(1,3)
console.log("Array my2 (splice) " , myn2)
console.log("Original array after SPLICE ", myn1)//Value of original array changes after splcie operation.
