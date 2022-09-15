import {useState} from "react";

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

    return (
        <>
            <Increment onClickFunction={incrementCounter}/> <br></br>
            <Counter count={counter}/><br></br>
            <Decrement onChangeFunction={decrementCounter}/>
        </>
    )
}

export default ReactParentChild;