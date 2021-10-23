import React from "react";
import { Form, Formik, ErrorMessage } from "formik";
import Input from "../Input";
import { SIGNUP_SCHEME } from "../../validation/validationShemesIN.js"
import "./SingInPage.scss";

// import googlelogo from "../../assets/image/google-brands.svg"

const initialValues = {
    email: "",
    password: "",

};

export default function LoginForm(props) {
    
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={SIGNUP_SCHEME}
            onSubmit={props.onSubmit}
        >
            {(formikProps) => {
                return (
                    <Form className="form">
                        <legend className="legendInput">
                            <Input type="text" name="email"   className="inputStyle" placeholder="Email adress"{...formikProps} />
                            <ErrorMessage name="email" className="errors"{...formikProps} />
                            <Input id="password" type="text" name="password" className="inputStyle" placeholder="Password"{...formikProps} />
                            <ErrorMessage name="password" className="errors" {...formikProps} />
                        </legend>
                        <legend>
                            <div className="frgtpassword">
                                <div className="remeberMe">
                                    <input id="frgt" type="checkbox" name="remeberMe" onChange={{}} />
                                    <p>Remeber Me</p>
                                </div>
                                <div><a href=" ">Forgot password</a></div>
                            </div>
                        </legend>
                        <legend className="legendBtn">
                            <button type="submit" className="btnStyle  btnLogin">LOGIN</button>
                            <button type="button" className="btnStyle btngoogle">Sing in with Google</button>
                        </legend>
                    </Form>
                );
            }}
        </Formik >
    );
}