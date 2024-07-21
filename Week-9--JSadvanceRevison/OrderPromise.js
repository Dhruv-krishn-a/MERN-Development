const cart = ["shoes" , "pantes" , "kurta"]

const promise = createOrder(cart)

promise
.then((orderId) =>{
    console.log(orderId);
    return orderId;
}).then((orderId)=>{
    return proceedTopayment(orderId)
}).then((paymentInfo)=>{
    console.log(paymentInfo)
}).catch((err)=>{
    console.log(err.message)
})

function createOrder(cart){
    const pr = new Promise((resolve, reject) => {
        if(!validatecart(cart)){
            const err = new Error("cart is not valid")
            reject();
        }
        //logic for createOrder
        const orderId = "12345"
        if(orderId){
            resolve(orderId)
        }
    })
    return pr;
}
function proceedTopayment(orderId){
    return new Promise((resolve, reject) => {
        resolve("payment successfull")
    })
}
function validatecart(cart){
    return true;
}