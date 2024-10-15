import { useState } from "react"


export default function Headerwithbutton(){

    const [firsttitle ,setfirsttitle] = useState("My name is Dhruv");

    function changeTitle(){
        setfirsttitle("My name is " + Math.random());
    }

    return(
        <>
    <button onClick={changeTitle}>Change title on click</button>
    <Header title={firsttitle}></Header>
    </>
)
}
// I dont want the static header to change 


export function Header({title}){
return (
    <div>
        {title}
    </div>
)
}

function header2({title}){
    return (
        <div>
            {title}
        </div>
    )
}