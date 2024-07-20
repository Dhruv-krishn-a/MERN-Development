const arr = [5,1,3,2,6]

//sum or max 

function findSum(arr)
{
    let sum =0;
    for(let i =0 ;i<arr.length;i++){
        sum =sum +arr[i];
    }
    return sum;
}

console.log(findSum(arr));

const output =arr.reduce(function (acc,curr){
    // acc is the accumulated values , like sum is accumilated in the sum varible (sum).
    //curr is the current value (index) arr[i].
    acc = acc + curr;
    //accumulated value + current;
    return acc;
    //now it is returned.
},0)
//this reduce function takes two value;
// 1. is the function ;
// 2. is the initial value of the accumulator; 
console.log(`This is answer using the filter ${output}`)


const maxoutput = arr.reduce((acc,curr) => {
    if(curr>acc){
        acc = curr;
    }
    return acc; 
},0)

console.log(maxoutput);
