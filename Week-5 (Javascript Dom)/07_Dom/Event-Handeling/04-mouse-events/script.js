const h1 = document.querySelector('h1')
const card = document.querySelector('.card')
const container = document.querySelector('.container')

let count = 0
//click,mousedown,mouseup,mouseenter(no need to click),mouseleave,mousemove(move inside element),wheelevent,scroll,touch,touchmove,drag,pointermove(works in all mobile and pc) 

h1.addEventListener('drag', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})