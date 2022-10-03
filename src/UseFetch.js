import {useState, useEffect} from 'react';

export default function useFetch(url)  {    
    const [content, setContent] = useState([]);

    useEffect(()=>{
        fetch(url)
        .then(response => response.json())
        .then(json => setContent(json))
    }, []);

    return content;
}