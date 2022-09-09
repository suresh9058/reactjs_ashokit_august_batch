import {useState, useEffect} from 'react';

const UseEffectExample = ()=> {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    // useEffect(()=>{
    //     console.log("use effect console");
    // });

    useEffect(()=>{
        console.log("Mounting componentDidMount");
    },[]);

    useEffect(()=>{
        console.log("Updating componentDidUpdate");
    },[count,count2]);

    useEffect(()=>{
        // we will end up with infinte loop
        // setCount2(count2+1);
        setCount(count+1);
        console.log("Updating componentDidUpdate count2");
    },[count2]);

    useEffect(()=>{
        // const socket = socketIOCLient("server endpoint");

        // socket.on("", data=>{
        //     // setResponse()
        // })
        // componentWillUnmount
        // return ()=> WebSocket.disconnect();
        return ()=> console.log("componentWillUnMOunt");
    },[]);

    return (
        <>
            <p>{count}</p>
            <button onClick={()=>setCount(count+1)}>Click me</button>
            <button onClick={()=>setCount2(count2+1)}>Click me2</button>
        </>
    )
}

export default UseEffectExample;