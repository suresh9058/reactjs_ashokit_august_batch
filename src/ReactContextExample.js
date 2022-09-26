import React from 'react';
// import { createContext } from "react";
import { useContext } from 'react';

export const UserContext = React.createContext();

// consumer
// 1. rendered passed props
// 2. useContext hook
// function User() {
//     return (
//     <UserContext.Consumer>
//         { 
//          value => <h1>{value}</h1>
//         }
//     </UserContext.Consumer>
//     )
// }
function User() {
    const value = useContext(UserContext);
    return (
        <h1>{value}</h1>
    )
}

// Producer->Provider
function ReactContextExample() {
    return (
        <UserContext.Provider value="Context test">
            <User />
        </UserContext.Provider>
    )
}

export default ReactContextExample;