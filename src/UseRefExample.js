import {useRef} from 'react';

function UseRefExample() {
    const inputElement = useRef();

    const handleInput = ()=>{
        inputElement.current.focus();
    }

    return (
        <>
            <input ref={inputElement} type="text"></input><br></br>
            <button onClick={handleInput}>Click to Focus</button>
        </>
    )
}

export default UseRefExample;
