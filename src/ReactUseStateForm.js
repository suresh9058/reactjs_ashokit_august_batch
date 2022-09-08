import {useState} from "react";

function ReactUseStateForm() {
    // const [email, setEmail]
    // const [pwd, setPwd]

    const [formState, setFormState] = useState({
        email: "",
        password: ""
    });

    const handleInputFields = (event) => {
        // console.log(event);
        // console.log(event.target.name);
        // console.log(event.target.value);
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        })
        console.log("formstate:",formState);
    }

    return (
        <>
           <form>
                Email: <input name="email" type="email" onChange={handleInputFields}></input><br></br>
                Password: <input name="password" type="password" onChange={handleInputFields}></input>
           </form>
        </>
    )
}

export default ReactUseStateForm;