import { useEffect } from "react";

function SpringBootExample() {

    useEffect(()=>{
        fetch('http://localhost:8080/hello?name=reactjs')
        .then(response=>response.text())
        .then(result=>console.log(result))
    },[]);
}

export default SpringBootExample;