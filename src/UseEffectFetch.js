import { useEffect, useState } from "react";

function UseEffectFetch() {
    const [content, setContent] = useState([]);
    const [contentType, setContentType] = useState("");

        // useEffect(()=>{
        //     fetch('https://jsonplaceholder.typicode.com/todos')
        //         .then(response => response.json())
        //         .then(json => setContent(json))
        // },[]);

        useEffect(()=>{
            fetch(`https://jsonplaceholder.typicode.com/${contentType}`)
                .then(response => response.json())
                .then(json => setContent(json))
        },[contentType]);

        return (
            <>
                <button onClick={()=> setContentType("posts")}>Posts</button>
                <button onClick={()=> setContentType("users")}>Users</button>
                <button onClick={()=> setContentType("todos")}>Todos</button>
            </>
            // <ul>
            //     {
            //         content.map((item)=>
            //             <li key={item.id}>{item.title}</li>
            //         )
            //     }
            // </ul>
        )
}

export default UseEffectFetch;