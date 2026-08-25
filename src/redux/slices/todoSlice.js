import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",

  initialState: {
    data: [],
  },

  reducers: {
    setTodo(state, action) {
      state.data.push(action.payload);
    },

    deleteTodo(state, action) {
      state.data = state.data.filter((todo) => todo.id !== action.payload);
    },

    toggleTodo(state, action) {
      const todo = state.data.find((todo) => todo.id === action.payload);

      if (todo) {
        todo.complete = !todo.complete;
      }
    },
  },
});

export const { setTodo, deleteTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
