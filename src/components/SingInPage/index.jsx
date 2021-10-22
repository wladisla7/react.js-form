import React from "react";
import { Form, Formik, ErrorMessage } from "formik";
import Input from "../Input"
import "./SingInPage.css"
// import googlelogo from "../../assets/image/google-brands.svg"

const initialValues = {
    email: "",
    password: "",

};


export default function LoginForm(props) {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={props.onSubmit}
        >
            {(formikProps) => {
                return (
                    <Form className="form">

                        <legend className="legendInput">
                            <div className="inputRelative">
                                <label for="name" className="labelName">Email adress</label>
                                <Input id="name" type="text" name="email" className="inputStyle" placeholder="Email adress"{...formikProps} />
                            </div>
                            <label for="password" className="labelName"></label>
                            <Input id="password" type="text" name="password" className="inputStyle" placeholder="Password"{...formikProps} />
                            <ErrorMessage name="confPassword" {...formikProps} />
                        </legend>
                        <legend>
                            <div className="frgtpassword">
                                <div className="remeberMe">
                                    <input id="frgt" type="checkbox" name="remeberMe" />
                                    <p>Remeber Me</p>
                                </div>
                                <div><a href=" ">Forgot password</a></div>
                            </div>
                        </legend>
                        <legend className="legendBtn">
                            <button type="submit" className="btnStyle  btnLogin">LOGIN</button>
                            <button type="submit" className="btnStyle btngoogle"><img src={{}} alt="logo" />Sing in with Google</button>
                        </legend>
                    </Form>
                );
            }}
        </Formik >
    );
}