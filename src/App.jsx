import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setTodo, deleteTodo, toggleTodo } from "./redux/slices/todoSlice";

function App() {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todo.data);

  const [addTodo, setAddTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(
      setTodo({
        id: Math.random(),
        name: addTodo,
        complete: false,
      }),
    );

    setAddTodo("");
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "800px",
        border: "1px solid black",
        margin: "20px auto 0",
        padding: "15px",
        borderRadius: "12px",
        gap: "15px",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        <input
          type="text"
          placeholder="Enter new todo"
          value={addTodo}
          onChange={(e) => setAddTodo(e.target.value)}
          style={{
            height: "30px",
          }}
        />

        <button
          type="submit"
          style={{
            height: "30px",
            color: "white",
            background: "green",
            border: "none",
            borderRadius: "6px",
          }}
        >
          Add Todo
        </button>
      </form>

      <div
        style={{
          width: "70%",
          border: "1px solid rgba(0, 0, 0, 0.5)",
          margin: "0 auto",
          borderRadius: "8px",
          paddingTop: "30px",
          paddingLeft: "15px",
          paddingRight: "15px",
          paddingBottom: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
          }}
        >
          Todo List
        </h2>

        {todos.length === 0 && (
          <p
            style={{
              textAlign: "center",
              color: "red",
            }}
          >
            ToDo List is empty
          </p>
        )}

        {todos.map((todo) => {
          return (
            <div
              key={todo.id}
              style={{
                display: "flex",
                borderBottom: "1px solid rgba(0, 0, 0, 0.5)",
                paddingBottom: "8px",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  textDecoration: todo.complete ? "line-through" : "none",
                  color: todo.complete ? "gray" : "black",
                }}
              >
                {todo.name}
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "5px",
                }}
              >
                <button
                  style={{
                    padding: "5px",
                    color: "white",
                    background: "blue",
                    border: "none",
                    borderRadius: "3px",
                  }}
                  onClick={() => dispatch(toggleTodo(todo.id))}
                >
                  {todo.complete ? "Undo" : "Complete"}
                </button>

                <button
                  onClick={() => dispatch(deleteTodo(todo.id))}
                  style={{
                    padding: "5px",
                    color: "white",
                    background: "red",
                    border: "none",
                    borderRadius: "3px",
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
