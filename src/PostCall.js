import { useEffect } from "react";

function PostCall() {
    const data = { 
        "userId": 1234,
        "title": "our title",
        "body": "our body"
      };
    useEffect(()=>{ 
        fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), 
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    },[]);

    return (
        <h1>Post call example</h1>
    )
}

export default PostCall;