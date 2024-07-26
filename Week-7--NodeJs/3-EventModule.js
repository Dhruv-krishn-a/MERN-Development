//They are build in into Node 
//Importing them

const EventEmitter = require('events')
const eventEmitter = new EventEmitter();
//These are basically like alerts , but they does not block the main thread ,
//Like in Chat applictions , users can JOIN at any instance .
//The will notifiy you once the user has joined , without blocking the MAIN THREAD , like ALERT.

// This is without parameters 
eventEmitter.on('tutorial',()=>{
    console.log("tutorial Event has occured ");
})

eventEmitter.emit('tutorial')
// With Parameters 
eventEmitter.on('Addition',(num1,num2)=>{
    console.log(num1+num2);
})

eventEmitter.emit('Addition',10,20)


// alert('An event occurred!');
// console.log('This will only log after the alert is dismissed.');

//Using Event Emitter 
// const EventEmitter = require('events');
// const myEmitter = new EventEmitter();

// myEmitter.on('alert', (message) => {
//     console.log('Alert: ' + message);
// });

// console.log('Before alert');
// myEmitter.emit('alert', 'An event occurred!');
// console.log('After alert');

