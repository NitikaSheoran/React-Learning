import {UsecontextFunc} from "./context.jsx";
import React from "react";

export default function Button() {
    const {list} = UsecontextFunc();
    const listitems = list.map((item,index)=>{
        return (<li key = {index}>{item}</li>);
    });
    const onclick = ()=>{
        alert("List items"+list.join(", "));
    }
    return(
        <>
        <button onClick={onclick}>Click me</button>
        <ul>{listitems}</ul>
        </>
    )
}