import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    data: [
      {
        id: 1,
        name: "Погулять с собакой",
        isActive: true,
      },
    ],
  },
  reducers: {
    setTodo(state, action) {
      state.data.push(action.payload);
    },
    deleteTodo(state, action) {
      state.data = state.data.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { setTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
