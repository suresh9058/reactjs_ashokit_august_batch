import {Formik, Form, Field, ErrorMessage} from 'formik';

function FormikYup() {
    return (
        <>
        <h1> SignUp Form</h1>
        <Form>
            <label>Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="span" />
            <label>Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="span" />
        </Form>
        </>
    )
}

export default FormikYup;