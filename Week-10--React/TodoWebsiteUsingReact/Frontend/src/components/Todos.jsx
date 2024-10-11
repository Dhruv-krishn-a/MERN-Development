export function Todos({Todos}){
    return (
        <div>
            {Todos.map(function(Todo){
                return <div>
                    <h1>{Todo.title}</h1>
                    <h2>{Todo.description}</h2>
                    <button >{Todo.completed == true ? "Completed" : "Mark as Completed"}</button>
                </div>
            })}
        </div>
    )
}