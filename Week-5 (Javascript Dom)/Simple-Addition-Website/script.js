function debounceAddition(){
    clearTimeout(timeout)
    timeout = setTimeout(() => {
        Addnumbers();
    }, 100);
}
function Addnumbers(){
 
    const a = document.getElementById("element1").value;
    const b = document.getElementById("element2").value;
    const element = document.getElementsByClassName("result")[0]
    fetch(`https://sum-server.100xdevs.com/sum?a= ${a} &b= ${b}`).then(
        function(response){
            console.log(response);
            response.text().then(function(ans){
                element.innerHTML = ans;
            })
        }
    );//this is comming from backend which is down currently 
}

// Just another cleaner way to do the same thing .
// async function Addnumbers2(){
//     const a = document.getElementById("element1").value;
//     const b = document.getElementById("element2").value;
//     const response = await fetch(`https://sum-server.100xdevs.com/sum?a= ${a} &b= ${b}`)
//     const ans = await response.text();
//     document.getElementById("finalsum").innerHTML = ans ;
// }