const h1 = document.querySelector('h1')
const input = document.querySelector('input')
// input.addEventListener('keypress' , (e)=>{
//     console.log("this is keypress event");
//     console.log("Key code",e.code)
//     console.log("Key value",e.key)
// })
input.addEventListener('keydown' , (e)=>{//this will fire when releasing the ky 
    console.log("this is keypress event");
    console.log("Key code",e.code)
    console.log("Key value",e.key)
})