let newcontainer = document.querySelector('h1');
newcontainer.addEventListener('click',function(){
    console.log("colorchanges");
    newcontainer.style.color="green"
})
function changeColor(){
    console.log("hi")
    let heading = document.getElementsByClassName("Heading")[0];
    heading.style.color="red";
}
//One more way to add event listner 
let card = document.getElementsByClassName('card')[0];
card.addEventListener('click' , ()=>{
    console.log("this is our card");
    card.style.backgroundColor="blue"
})
let button = document.getElementsByClassName("btn")[0];
button.addEventListener('click',()=>{
    const card2=document.getElementsByClassName('card')[1];
    card2.style.backgroundColor="white"

})
let count =1
const container = document.querySelector('.container')
let button1=document.getElementsByClassName('btn')[1]
button1.addEventListener('click' , ()=>{
    const newcard = document.createElement('div')
    newcard.classList.add('card')
    newcard.innerText = count;
    container.append(newcard)
    count++
    console.log('NEWCARD')
})
