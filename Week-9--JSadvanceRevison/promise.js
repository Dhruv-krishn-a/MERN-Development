const cart = ["shoes", "pants", "hat"];

// Callback solution:

createOrder(cart, function(orderId) {
    proceedToPayment(orderId);
});

// Promise solution:

const promise = createOrder(cart);

// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// When the JS engine executes the line above, the createOrder API will return a promise. If there are multiple programs after that, they will start executing,

// and after a certain time, this promise object will be filled with data automatically, and we will have order details in it.

// Initially: {data: undefined}
// Later: {data: orderDetails}

// Now what happens when we have these order details?

// We will attach a callback function to the promise.

// Once the data is available, the callback function will be automatically called.

promise.then(function(orderId) {
    proceedToPayment(orderId);
});

// In the first solution, we passed the callback function directly to createOrder. 
// In the promise solution, we attach the callback function to the promise:

// IN PROMISE -> 
// The createOrder API will only do its job: it will create an order and fill the promise object with the data (orderId).
// As soon as this promise object is filled with data, it will automatically call the attached callback function, giving us control over the program.