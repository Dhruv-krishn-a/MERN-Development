//state , components
//a global varibale for state
// let state = {
//   count:0
// } React is not watching if you define state varibale like this 

import { useState } from "react";

function App() {
  // This is initalizing the new state 
  const [todos, settodos] = useState([{
    title:"Study task-1",
    description:"Study WEB",
    completed:"True "
  },
  {
    title:"Study task-2",
    description:"Study DSA",
    completed:"true"
  }]
);
function addNewTODO(){
  //settodos([all the original todos , New todos])
  settodos([...todos,{
    title:"Title for New TODO",
    description:"DESC. for new TODO"
  }])
}
  return(
    <div>
      {todos.map(function(Todo_as_Paramenter){
        return <Todo  title={Todo_as_Paramenter.title} description={Todo_as_Paramenter.description}></Todo>
      })}
      <button onClick={addNewTODO}>New TODO</button>
    </div>
  )
}
function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}
export default App
// Most of the APPs will have a big state on top and multiple comopnents written down , and as you update you state variable , your application will get Re-rendered

//Dist folder is very important , if we have that , we dont need any of the other files or folder. 