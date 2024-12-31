import React from "react";
import { useDispatch } from "react-redux";
import { setTheme } from "../Features/Todo/TodoSlice";
import { useSelector } from "react-redux";

function Themebtn(){
    const theme = useSelector(state => state.theme)
    const dispatch = useDispatch()
    const onChangeBtn = (e)=>{
        const dark = e.currentTarget.checked;
        if(dark){
            dispatch(setTheme("light"));
        }else{
            dispatch(setTheme("dark"));
        }
    }
    return(
        <>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onChangeBtn} checked={theme === "dark"}>
            {theme === "dark" ? "Light" : "Dark"} Theme
            </button>
        </>
    )
}
export default Themebtn;