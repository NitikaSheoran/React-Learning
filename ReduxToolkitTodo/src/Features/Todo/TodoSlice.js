import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
    todos: [{
        text: "todo1",
        id: 1,
        completed: false,
    }],
    theme: "dark"
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false,
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action)=>{
            state.todos = state.todos.filter((todo)=>todo.id!==action.payload)
        },
        updateTodo: (state, action)=>{
            state.todos = state.todos.map((todo)=>
                todo.id === action.payload.id ? {...todo, text: action.payload.text} : todo
            )
        },
        toggleTodo: (state, action)=>{
            state.todos = state.todos.map((todo)=>
                todo.id === action.payload.id ? {...todo, completed: !todo.completed} : todo
            )
        },
        setTheme: (state, action)=>{
            state.theme = action.payload
            document.querySelector('html').classList.remove('dark','light');
            document.querySelector('html').classList.add(action.payload);
        }

    }
})

export const {addTodo, removeTodo, updateTodo, toggleTodo, setTheme} = todoSlice.actions
export default todoSlice.reducer