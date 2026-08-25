import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setTodo, deleteTodo } from "./redux/slices/todoSlice";

function App() {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todo.data);

  const [addTodo, setAddTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(setTodo({ id: Math.random(), name: addTodo, isActive: true }));
    setAddTodo("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter new todo"
          value={addTodo}
          onChange={(e) => setAddTodo(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
      <div>
        <h2>Todo List</h2>
        <div>
          {todos.map((todo) => {
            return (
              <div key={todo.id}>
                <p>{todo.name}</p>
                <button>Complete</button>
                <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
