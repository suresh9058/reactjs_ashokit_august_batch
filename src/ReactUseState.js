import React, {useState} from "react";

function ReactUseState() {
    
    const [count, setCount] = useState(0);//undefined

    // passing the parameters from events
    const handleButtonEvent = (a,b) => {
        // console.log("button clicked");
        //count = count+1;//0+1
        // setCount(count+1);
        // setCount(count+1);//2, error, 
        setCount((prevCount)=>prevCount+1);
        setCount((prevCount)=>prevCount+1);
    }

    return (
        <>
            <p>{count}</p>
            <button onClick={()=>handleButtonEvent(10,20)}>Counter Increment</button>
        </>
    )
}

export default ReactUseState;