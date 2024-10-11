import { useState } from "react";

export function CreateTodo({ setTodos, fetchTodos }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <input
        id="title"
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <br />
      <input
        id="description"
        type="text"
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <br />
      <button
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "Content-type": "application/json",
            },
          })
            .then(async function (res) {
              if (res.ok) {
                const json = await res.json();
                alert("TODO ADDED");
                fetchTodos(); // Fetch all todos again after adding a new one
              } else {
                alert("Failed to add TODO");
              }
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        }}
      >
      Add a Todo
      </button>
    </div>
  );
}