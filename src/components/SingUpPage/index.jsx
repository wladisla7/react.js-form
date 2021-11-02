import React from "react";
import { Form, Formik, Field } from "formik";
import Input from "../Input";
import { SIGNUP_SCHEME } from "../../validation/validationShemesUp.js"
import "./SingUpPage.scss"
import "../../common/main.scss"



import googlelogo from "../../assets/image/google.png"

const initialValues = {
    firstname: "",
    lastname: "",
    displayname: "",
    email: "",
    password: "",
    confPassword: "",
    allow: false

};



export default function RegisrationForm(props) {

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
                            <label className="regform">
                                <Input type="text" name="firstname" className="inputStyleUp" placeholder="First Name" {...formikProps} />

                                <Input type="text" name="lastname" className="inputStyleUp" placeholder="Last Name" {...formikProps} />
                            </label>
                            <label className="regform">
                                <Input type="text" name="displayname" className="inputStyleUp" placeholder="Display Name" {...formikProps} />

                                <Input type="text" name="email" className="inputStyleUp" placeholder="Email Adress"  {...formikProps} />
                            </label>
                            <label className="regform">
                                <Input type="text" name="password" className="inputStyleUp" placeholder="Password"   {...formikProps} />

                                <Input type="text" name="confPassword" className="inputStyleUp" placeholder="Confirm Password"  {...formikProps} />
                            </label>
                        </legend>
                        <legend className="borderFor">
                            <label className="radioPosition">
                                <input type="radio" name="Join" value="Buyer" checked />
                            </label>
                            <div>
                                <p className="radiostyleh4"> Join As a Buyer </p>
                                <p className="radiostyleP">I am looking for a Name, Logo or Tagline for my business, brand or product.</p>
                            </div>
                        </legend>
                        <legend className="borderFor">
                            <label className="radioPosition">
                                <input type="radio" name="Join" value="Seller" />
                            </label>
                            <div>
                                <p className="radiostyleh4">  Join As a Creative or Marketplace Seller  </p>
                                <p className="radiostyleP">I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.</p>
                            </div>
                        </legend>
                        <legend className="Allow">
                            <Field type="checkbox" name="allow" required />
                            <p> Allow Squadhelp to send marketing/promotional offers from time to time </p>
                        </legend>
                        <legend className="legendBtn">
                            <button type="submit" className="btnStyle  btnLogin">Create Account</button>
                            <span className="Service">By clicking this button, you agree to our <u>Terms of Service</u>. </span>
                            <button type="button" href="google.com/intl/ru/gmail/about" className="btnStyle btngoogle"> <img src={googlelogo} alt={"logo-google"}/> Sing in with Google</button>
                        </legend>
                    </Form>
                );
            }}
        </Formik >
    );
}