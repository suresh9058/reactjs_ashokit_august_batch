import {useState} from 'react';

function ReactForm() {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const initialValue = {
        email: "",
        password:""
    };

    const [formValues, setFormValues] = useState(initialValue);
    const [formErrors, setFormErrors] = useState({});

    const handleInputChange = (event)=>{
        // [event.target.name]: event.target.value
        const {name, value} = event.target;
        setFormValues({...formValues,[name]: value});
    }

    const handleSubmit = (event)=>{
        event.preventDefault();// don't want to go with default browser things
        setFormErrors(validate(formValues));
    }

    const validate = (values)=>{
        let errors = {}; // email: "cannot be blank"
        const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
        if(!values.email) { //if(!"")
            errors.email = "Cannot be blank";
        } else if(!emailPattern.test(values.email)) {
            errors.email = "Invalid email format";
        }

        if(!values.password) {
            errors.password="Cannot be blank";
        } else if(values.password.length <8) {
            errors.password = "Password must contain atleast";
        }

        return errors;
    }

    return (
        <>
            <h1>Signup Form</h1>
            <form>
                <div>
                    <label>Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        onChange={handleInputChange}
                    />
                    {
                        formErrors.email && (
                            <span>{formErrors.email}</span>
                        )
                    }
                </div>
                <div>
                    <label>Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        onChange={handleInputChange}
                    />
                    {
                        formErrors.password && (
                            <span>{formErrors.password}</span>
                        )
                    }
                </div>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}

export default ReactForm;