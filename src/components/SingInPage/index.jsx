import React from "react";
import { Form, Formik, Field } from "formik";
import Input from "../Input";
import { SIGNIN_SCHEME } from "../../validation/validationShemesIn.js"
import mainstyles from "../../common/mainStylesForComponents.module.scss"
import styles from "./SingInPage.module.scss";
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
                    <Form className={mainstyles.form}>
                        <legend className={mainstyles.legendInput}>

                            <Input type="text" name="email" className={styles.inputLogin} placeholder="Email adress"{...formikProps} />

                            <Input type="text" name="password" className={styles.inputLogin} placeholder="Password"{...formikProps} />

                        </legend>
                        <legend>
                            <div className={styles.frgtpassword}>
                                <label className={styles.remeberMe}>
                                    <Field type="checkbox" name="remeberMe" />
                                    Remeber Me
                                </label>
                                <span><a href={wasted}>Forgot password</a></span>
                            </div>
                        </legend>
                        <legend className={mainstyles.legendBtn}>
                            <button type="submit" className={mainstyles.btnforlogin}>LOGIN</button>
                        <button type="button" href="google.com/intl/ru/gmail/about" className={mainstyles.btnforgoggle}> <img src={googlelogo} alt={"logo-google"}/> Sing in with Google</button>
                        </legend>
                    </Form>
                );
            }}
        </Formik >
    );
}