//This function will get to callback queue. will return after the loop
function onDone(){
    console.log(" On done function ")
}

setTimeout(onDone ,1000)
console.log("After SetTimeout")

for(let i=0;i<10;i++)
{
    console.log(i)
}