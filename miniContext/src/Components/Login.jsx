import React from "react";
import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    //get setuser from context . we have defined setuser in Usercontext.jsx
    //send username,password directly to setuser function by using context
    const {setUser} = useContext(UserContext);

    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser({username,password})
    }

  return (
    <div>
      <h2>Login</h2>
      <input type='text' 
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      placeholder="username"  />
      <input type='password' 
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="password"  />
      <button onClick={handleSubmit} >Submit</button>
    </div>
  )
}
export default Login;