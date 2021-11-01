import React from "react";
import { ErrorMessage, Field } from "formik";
import cn from "classnames";
import styles from "./Input.module.scss"

export default function Input({ name, errors, touched, values,  className, ...rest }) {

    const classNames = cn("input",className,{
        [styles.valid]: touched[name] && !errors[name],
        [styles.invalid]: touched[name] && errors[name],
    });

    console.log(errors)

    return (
        (
            <label className={styles.relative}>
                <Field    name={name} {...rest}   className={classNames}  />
                <ErrorMessage name={name} className={styles.errorMsg}  component="span"  />
            </label>
        )
    );
}