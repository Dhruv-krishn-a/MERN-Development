const clock = document.querySelector(`#clock`)



setInterval(function(){
    let date = new Date()
    console.log(date.toLocaleDateString())
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
   
    clock.innerHTML = hours + ":" + minutes + ":" + seconds 
} , 1000)