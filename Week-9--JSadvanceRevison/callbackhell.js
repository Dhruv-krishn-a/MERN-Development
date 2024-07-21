console.log("MY name is :");
setTimeout(() => {
    console.log("Dhruv");
}, 5000);
console.log("Krishna");
// 1. create order 
// 2. payment
const cart = ["shoes" , "pants" , "hat"]
// api.createOrder()
// api.proceedtopayment()
// given proceedtopayment callback function.
// Now what if we want to show an order summary page after payment.
// Now it is the responsiblity of CREATEORDER to call PROCEEDTOPAYMENT , which has the responsibiltiy to call SHOWORDERSUMMARY.
api.createOrder(cart , 
    //Gave this callback funtion to create order api ,can call our function back , which is very risky 
    () => {
    api.proceedtopayment(function(){
        api.showOrderSummary()
    })
})

// When we have large codebase and have multiple APi which are dependent on each other . what heppens is we go into CALLBACK HELL. and our code starts to grow horizontally , Tough to maintain .
// Structure is known as PIRAMID OF DOOM

//We loose control due to this.