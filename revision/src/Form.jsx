import { useState } from "react";
import { useRef } from "react";

function Form(){
const [input,setInput] = useState("");
const demoref = useRef(null);
function change(e){
    e.preventDefault();
    demoref.current.style.backgroundColor = "red";
}
    return(
        <>
        <form>
            <label ref = {demoref}>Enter text: </label>
            <input type = "text"
                   value={input}
                   onChange={(e)=>{
                    setInput(e.target.value);
                   }} />
            <button onClick={change}>change</button>
            <p>{input}</p>
        </form>
        </>
    )
}

export default Form;