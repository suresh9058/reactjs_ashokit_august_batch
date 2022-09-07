import {useState} from "react";

function ReactUseState() {
    // const arrayRef = useState(0); // [variable, setVariable] --> [0, ƒ]
    // console.log(arrayRef);
    // const variable = arrayRef[0];//0
    // const setVariable = arrayRef[1];//f
    const [variable, setVariable] = useState(0);// [0, ƒ]
    //  variable is state variable -->0
    //  setVariable this method can modify the state variable
    return (
        <></>
    )
}

export default ReactUseState;