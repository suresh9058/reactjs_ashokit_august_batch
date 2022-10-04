import { useEffect } from "react";
import axios from 'axios';

function PostCall() {
    const data = { 
        "userId": 1234,
        "title": "our title",
        "body": "our body"
      };
    // useEffect(()=>{ 
    //     fetch('https://jsonplaceholder.typicode.com/posts', {
    //     method: 'POST', // or 'PUT'
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data), 
    //     })
    //     .then((response) => response.json())
    //     .then((data) => {
    //         console.log('Success:', data);
    //     })
    //     .catch((error) => {
    //         console.error('Error:', error);
    //     });
    // },[]);
    useEffect(()=>{ 
        axios.post('https://jsonplaceholder.typicode.com/posts',{
            data
        })
        .then(function (response) {
          // handle success
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    },[]);

    return (
        <h1>Post call example</h1>
    )
}

export default PostCall;