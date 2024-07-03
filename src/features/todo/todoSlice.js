import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo: (state,action) => {
            const todo = {
                id : nanoid(),
                data : action.payload,
            }
            state.todos.unshift(todo)
        },
        removeTodo: (state,action) => {
            state.todos = state.todos.filter((todo) =>  todo.id !== action.payload)
        },
        updateTodo: (state,action) => {
            const {id , newData }= action.payload
            const todo = state.todos.find((todo) => todo.id === id)
            if(todo){
                todo.data = newData
            }
        },
    }
})

export const {addTodo , removeTodo , updateTodo} = todoSlice.actions 
export default todoSlice.reducer