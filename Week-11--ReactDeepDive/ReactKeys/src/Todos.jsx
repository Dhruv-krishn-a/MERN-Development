import { useState } from "react";

export default function Todos() {
    const [todos, setTodos] = useState([]); // State for the list of to-dos
    const [title, setTitle] = useState(""); // State for the title input
    const [description, setDescription] = useState(""); // State for the description input

    // Function to add a new to-do
    const addTodo = () => {
        if (title && description) {
            // Only add if both title and description are provided
            setTodos([...todos, { title, description }]); // Add new to-do to the list
            setTitle(""); // Clear the title input
            setDescription(""); // Clear the description input
        }
    };

    return (
        <>
            <h2>Todo List</h2>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)} // Update title state on change
            />
            <br />
            <br />
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)} // Update description state on change
            />
            <br />
            <br />
            <button onClick={addTodo}>Add Todo</button> {/* Button to add the to-do */}
            <br />
            <br />
            <div>
                <h3>Todos:</h3>
                {todos.map((todo, index) => (
                    <div key={index}>
                        <h4>{todo.title}</h4>
                        <p>{todo.description}</p>
                        <hr />
                    </div>
                ))}
            </div>
        </>
    );
}
