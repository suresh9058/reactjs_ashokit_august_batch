import { useEffect } from "react";

function UseEffectTwo() {
    useEffect(()=>{
        console.log("mounting");

        return ()=> console.log("unmounting");
    },[]);
}

export default UseEffectTwo;