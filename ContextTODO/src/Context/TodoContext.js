import { useContext,createContext } from "react";
import React from "react";
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo Message",
            completed: false,
        }
    ],
    addTodo: (todo)=>{},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},

    theme: "dark",
    darkTheme: ()=>{},
    lightTheme: ()=>{}
})

export const useTodo = ()=>{
    return useContext(TodoContext);
}
export const TodoProvider = TodoContext.Provider;