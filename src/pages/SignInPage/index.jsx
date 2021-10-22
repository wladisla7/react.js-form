import React from "react";
import "./SingInPage.css"
import { Link } from "react-router-dom";
import LoginForm from "../../components/SingInPage"
import logo  from "../../assets/image/logo.png";

export default function SignInPage() {


    const onSubmit = (values, formikBag) => {
        console.log(values);

        formikBag.resetForm();
    };

    console.log(onSubmit)

    return (
        <section className="signIn">
            <header className="headerSignIn">
                {/* <Link to="/"> */}
                <img src={logo} alt="LOGO" />
                {/* </Link> */}
                <Link to="/signup">
                    <div className="btnSing">
                        <a href="/singUpPage">Singup</a>
                    </div>
                </Link>
            </header>
            <div className="Login">
                <h1>LOGIN TO YOUR ACCOUNT</h1>
            </div>
            <div className="LoginForm">
                <LoginForm onSubmit={onSubmit} />
            </div>
        </section>
    );
}