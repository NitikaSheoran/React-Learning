import { useContext,createContext } from "react";


export const Context1 = createContext();

export const UsecontextFunc = () => useContext(Context1);
export const ContextProvider = Context1.Provider;