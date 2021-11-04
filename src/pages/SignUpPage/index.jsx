import React from "react";
import { Link } from "react-router-dom";
import RegisrationForm from "../../components/SingUpPage"
import logo from "../../assets/image/logo.png";
import stylepage from "../../common/mainStylesForPages.module.scss"
 



export default function SignUpPage() {

  const onSubmit = (values, formikBag) => {
    console.log(values);
    formikBag.resetForm();
  };

  console.log(onSubmit)

  return (
    <section className={stylepage.sign}>
      <header className={stylepage.headerSign}>
        <img src={logo} alt="LOGO" />
        <Link to="/">
          <div className={stylepage.btnSing}>
            <span>Login</span>
          </div>
        </Link>
      </header>
      <div className={stylepage.Login}>
        <h1>CREATE AN ACCOUNT</h1>
        <p className={stylepage.private}>We always keep your name and email address private.</p>
      </div>
      <div className={stylepage.Form}>
        <RegisrationForm onSubmit={onSubmit} />
      </div>
    </section>
  );
}

