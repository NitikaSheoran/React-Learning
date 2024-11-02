import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";
function Profile() {
    //get the values that we sent via login component setuser context 
    const {user} = useContext(UserContext);
  if(!user) return <div>please login</div>
  else return (
    <div>
      <h2>Profile using contextApi</h2>
      <h3>{user.username}</h3>
    </div>
  )
}
export default Profile;