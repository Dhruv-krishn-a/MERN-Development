function myOwnSetTimeout(callback, duration) {
    setTimeout(callback, duration);
   
setTimeout(function(){
    callback()
},duration)
  
}
//calling
myOwnSetTimeout(function(){

},1000)

//The logic here and above is same but here you are using promis and above callback
function promisifiedmyOwnSetTimeout(duration){
    //new promise which have function which have resolve as the first argument.
    const p=new Promise(function(resolve){
       // setTimeout(resolve,duration)
       //after duration call resolve 
       setTimeout(function() {
        //resolve is something that this promise object gave you
        resolve()
       },duration)

    });
    return p
}

//calling this 
const ans = promisifiedmyOwnSetTimeout(1000)
//how to tell promise whom to call ones you are done
//console.log(ans); will give promise {<pending>}
//async await syntax , promis chaining =>callback hell 
ans.then(function(){
    console.log("timeout is done")
});


//the syntax is different because the way you call them is also different 