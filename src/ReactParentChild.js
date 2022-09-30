import {Profiler, useState} from "react";

function Increment(props) {
    return <button onClick={props.onClickFunction}>Increment</button>
}

function Counter(props) {
    return <p>{props.count}</p>
}

function Decrement(props) {
    return <button onClick={props.onChangeFunction}>Decrement</button>
}

function ReactParentChild() {
    const [counter, setCounter] = useState(0);

    const incrementCounter = ()=>setCounter(counter+1);
    const decrementCounter = ()=>setCounter(counter-1);
    const logTimes = (id,phase,actualDuration,baseDuration,startTime,commitTime,interactions)=>{
        // When the component is taking more time then we can write an alert message to our DB
        console.table({id,phase,actualDuration,baseDuration,startTime,commitTime,interactions});
    }

    return (
        <>
            <Profiler id="counter" onRender={logTimes} >
                <Increment onClickFunction={incrementCounter}/> <br></br>
                <Counter count={counter}/><br></br>
                <Decrement onChangeFunction={decrementCounter}/>
            </Profiler>
        </>
    )
}

export default ReactParentChild;