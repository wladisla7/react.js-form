import React from "react";
import { Link } from "react-router-dom";

export default function SignInPage() {


    return (
        <section>
            <header>
                {/* <Link to="/"> */}
                <img src="/images/logo.png" alt="LOGO" />
                {/* </Link> */}
                <Link to="/SignUpPage">
                    <button>SingUp</button>
                </Link>
            </header>
            <h1>LOGIN TO YOUR ACCOUNT</h1>
        </section>
    );
}