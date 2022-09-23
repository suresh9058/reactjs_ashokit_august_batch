import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

// created yup javascript scheme object
const SignUpSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is Required"),
    password: Yup.string().required("Password is Required").min(8, "Password is too short")
});

const initialValues = {
    email: "",
    password:""
};

function FormikYup() {

    return (
        <Formik 
            initialValues={initialValues}
            validationSchema={SignUpSchema}
            onSubmit={(values)=>console.log(values)}>
                { (formik) =>{ // Rendered passed props
                const {errors,touched, isValid, dirty} = formik; // isValid -> true
                console.log(formik);
        return (
            <>
            <h1> SignUp Form</h1>
            <Form>
                <label>Email</label>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="span" /><br></br>
                <label>Password</label>
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="span" /><br></br>
                <button type="submit" disabled={!(isValid && dirty)}>SignUp</button>
            </Form>
            </>
        )
        }}
        </Formik>
    )
}

export default FormikYup;