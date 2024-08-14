const input = document.getElementById('username')
const paragraph = document.querySelector('p')

// input.addEventListener('click',()=>{
//     console.log("click event is added to input")
// })
//Input event is trigged when typing ,,to access the input 
input.addEventListener('input',(event)=>{//It is getting the char value of event 
    console.log("click event is added to input")
    console.log(event.target.value);//for getting the whole value .
    console.log(event);

    //Updating the value of paragraph , which is coming from input
    paragraph.innerText=event.target.value
})

const input1 = document.getElementsByClassName('username')[0]

const paragraph1=document.getElementsByClassName('Para')[0]
//Change is called when we click outside the input box after typing.
input1.addEventListener('change',(e)=>{
    console.log("change event is added to input 2")
    console.log(e.target.value)
    console.log(e);

    paragraph1.innerText=e.target.value
})



const input2 = document.getElementsByClassName('username')[1]
const paragraph2=document.getElementsByClassName('Para')[1]
//this will get triggerd when we click inside input box 
input2.addEventListener('focus',(e)=>{
    console.log("focus event is added to input 3")
    console.log(e.target.value)
    console.log(e);

    paragraph2.innerText=e.target.value
})


