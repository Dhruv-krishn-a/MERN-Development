const arr = [5,1,3,2,6];
// Taking this array as an input and getting values which are filtered from this based on a login 

//Filtering odd elements .

const output = arr.filter((x) => {
    return x%2;
})
console.log("filtering the odd values");
console.log(output);

function iseven(x){
    return x%2===0;
}
const evenoutput = arr.filter(iseven);
console.log("filtering the even values");
console.log(evenoutput)
