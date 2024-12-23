import { useState } from "react";
import React from "react";

function Message(props){
    if(props.isLoggedIn){
        return <h1>Welcome!</h1>
    }else{
        return <h1>Please log in!</h1>
    }
}
function Logout1(props){
    return <button onClick={props.clickFunc}>Logout</button>
}
function Login1(props){
    return <button onClick={props.clickFunc}>Login</button>
}
function Login(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    function LogoutClicked(){
        setIsLoggedIn(false);
    }
    function LoginClicked(){
        setIsLoggedIn(true);
    }
    return(
        <>
        <Message isLoggedIn={isLoggedIn}/>
        {isLoggedIn ? (<Logout1 clickFunc = {LogoutClicked}/> ) : (<Login1 clickFunc={LoginClicked}/>) }
        </>
    )
}

export default Login;