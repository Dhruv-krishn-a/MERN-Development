import { useState, useEffect } from "react";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]); // Initialize with empty array

  // Function to fetch all todos from the backend
  const fetchTodos = () => {
    fetch("http://localhost:3000/todos")
      .then(async (res) => {
        const json = await res.json();
        setTodos(json.todos || []); // Update state with fetched todos
      })
      .catch((err) => {
        console.error("Failed to fetch todos", err);
      });
  };

  // Fetch todos when the component mounts
  useEffect(() => {
    fetchTodos(); // Call the function to fetch all todos when the app loads
  }, []); // Empty dependency array ensures it runs only once

  return (
    <div>
      <CreateTodo setTodos={setTodos} fetchTodos={fetchTodos} /> {/* Pass fetchTodos */}
      <Todos Todos={todos} />
    </div>
  );
}

export default App;
