import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../../components/SingInPage"
import logo from "../../assets/image/logo.png";
import stylepage from "../../common/mainStylesForPages.module.scss"

export default function SignInPage() {


    const onSubmit = (values, formikBag) => {
        console.log(values);
        formikBag.resetForm();
    };

    console.log(onSubmit)

    return (
        <section className={stylepage.sign}>
            <header className={stylepage.headerSign}>
                <img src={logo} alt="LOGO" />
                <Link to="/signup">
                    <div className={stylepage.btnSing}>
                        <span>Singup</span>
                    </div>
                </Link>
            </header>
            <div className={stylepage.Login}>
                <h1>LOGIN TO YOUR ACCOUNT</h1>
            </div>
            <div className={stylepage.Form}>
                <LoginForm onSubmit={onSubmit} />
            </div>
        </section>
    );
}