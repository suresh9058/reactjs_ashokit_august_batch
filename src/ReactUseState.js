import {useState} from "react";

function ReactUseState() {
    
    const [count, setCount] = useState(0);//undefined

    const handleButtonEvent = () => {
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
            <button onClick={handleButtonEvent}>Counter Increment</button>
        </>
    )
}

export default ReactUseState;