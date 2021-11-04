import React from "react";
import { Form, Formik, Field } from "formik";
import Input from "../Input";
import { SIGNUP_SCHEME } from "../../validation/validationShemesUp.js"
import mainstyles from "../../common/mainStylesForComponents.module.scss"
import styles from "./SingUpPage.module.scss"
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
                    <Form className={mainstyles.form}>
                        <legend className={mainstyles.legendInput}>
                            <label className={styles.regform}>
                                <Input type="text" name="firstname" className={styles.inputStyleUp} placeholder="First Name" {...formikProps} />

                                <Input type="text" name="lastname" className={styles.inputStyleUp} placeholder="Last Name" {...formikProps} />
                            </label>
                            <label className={styles.regform}>
                                <Input type="text" name="displayname" className={styles.inputStyleUp} placeholder="Display Name" {...formikProps} />

                                <Input type="text" name="email" className={styles.inputStyleUp} placeholder="Email Adress"  {...formikProps} />
                            </label>
                            <label className={styles.regform}>
                                <Input type="text" name="password" className={styles.inputStyleUp} placeholder="Password"   {...formikProps} />

                                <Input type="text" name="confPassword" className={styles.inputStyleUp} placeholder="Confirm Password"  {...formikProps} />
                            </label>
                        </legend>
                        <legend className={styles.borderFor}>
                            <label className={styles.radioPosition}>
                                <input type="radio" name="Join" value="Buyer" checked />
                            </label>
                            <div>
                                <p className={styles.radiostyleh4}> Join As a Buyer </p>
                                <p className={styles.radiostyleP}>I am looking for a Name, Logo or Tagline for my business, brand or product.</p>
                            </div>
                        </legend>
                        <legend className={styles.borderFor}>
                            <label className={styles.radioPosition}>
                                <input type="radio" name="Join" value="Seller" />
                            </label>
                            <div>
                                <p className={styles.radiostyleh4}>  Join As a Creative or Marketplace Seller  </p>
                                <p className={styles.radiostyleP}>I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.</p>
                            </div>
                        </legend>
                        <legend className={styles.Allow}>
                            <Field type="checkbox" name="allow" required />
                            <span className={styles.AllowSpan}> Allow Squadhelp to send marketing/promotional offers from time to time </span>
                        </legend>
                        <legend className={mainstyles.legendBtn}>
                            <button type="submit" className={mainstyles.btnforlogin}>Create Account</button>
                            <span className={styles.Service}>By clicking this button, you agree to our <u>Terms of Service</u>. </span>
                            <button type="button" href="google.com/intl/ru/gmail/about" className={mainstyles.btnforgoggle}> <img src={googlelogo} alt={"logo-google"} /> Sing in with Google</button>
                        </legend>
                    </Form>
                );
            }}
        </Formik >
    );
}