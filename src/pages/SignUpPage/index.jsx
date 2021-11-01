import React from "react";
import { Link } from "react-router-dom";
import RegisrationForm from "../../components/SingUpPage"
import logo from "../../assets/image/logo.png";
 



export default function SignUpPage() {

  const onSubmit = (values, formikBag) => {
    console.log(values);
    formikBag.resetForm();
  };

  console.log(onSubmit)

  return (
    <section className="sign">
      <header className="headerSign">
        <img src={logo} alt="LOGO" />
        <Link to="/">
          <div className="btnSing">
            <span>Login</span>
          </div>
        </Link>
      </header>
      <div className="Login">
        <h1>CREATE AN ACCOUNT</h1>
        <p className="private">We always keep your name and email address private.</p>
      </div>
      <div className="Form">
        <RegisrationForm onSubmit={onSubmit} />
      </div>
    </section>
  );
}

