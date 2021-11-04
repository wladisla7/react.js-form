import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../../components/SingInPage"
import logo from "../../assets/image/logo.png";
import "../../common/mainStylesForPages.scss"

export default function SignInPage() {


    const onSubmit = (values, formikBag) => {
        console.log(values);
        formikBag.resetForm();
    };

    console.log(onSubmit)

    return (
        <section className="sign">
            <header className="headerSign">
                <img src={logo} alt="LOGO" />
                <Link to="/signup">
                    <div className="btnSing">
                        <span>Singup</span>
                    </div>
                </Link>
            </header>
            <div className="Login">
                <h1>LOGIN TO YOUR ACCOUNT</h1>
            </div>
            <div className="Form">
                <LoginForm onSubmit={onSubmit} />
            </div>
        </section>
    );
}