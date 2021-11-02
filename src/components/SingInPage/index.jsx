import React from "react";
import { Form, Formik, Field } from "formik";
import Input from "../Input";
import { SIGNIN_SCHEME } from "../../validation/validationShemesIn.js"
import "./SingInPage.scss";
import "../../common/mainForComponents.scss"
import wasted from "../../assets/image/wasted.png"

import googlelogo from "../../assets/image/google.png"

const initialValues = {
    email: "",
    password: "",
    remeberMe: false
};





export default function LoginForm(props) {
    return (
        <Formik

            initialValues={initialValues}
            validationSchema={SIGNIN_SCHEME}
            onSubmit={props.onSubmit}
        >
            {(formikProps) => {
                return (
                    <Form className="form">
                        <legend className="legendInput">

                            <Input type="text" name="email" className="inputLogin" placeholder="Email adress"{...formikProps} />

                            <Input type="text" name="password" className="inputLogin" placeholder="Password"{...formikProps} />

                        </legend>
                        <legend>
                            <div className="frgtpassword">
                                <label className="remeberMe">
                                    <Field type="checkbox" name="remeberMe" />
                                    Remeber Me
                                </label>
                                <span><a href={wasted}>Forgot password</a></span>
                            </div>
                        </legend>
                        <legend className="legendBtn">
                            <button type="submit" className="btnStyle  btnLogin">LOGIN</button>
                        <button type="button" href="google.com/intl/ru/gmail/about" className="btnStyle btngoogle" > <img src={googlelogo} alt={"logo-google"}/> Sing in with Google</button>
                        </legend>
                    </Form>
                );
            }}
        </Formik >
    );
}