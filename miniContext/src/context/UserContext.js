import React from 'react'
//context is provided by react , no need to import explicitly

const UserContext = React.createContext();

export default UserContext;

// provider is used to provide the value to the components. all components inside provider can access context values

