import React from "react";
import { ErrorMessage, Field } from "formik";


export default function Input ({ name, errors, touched, values, ...rest }) {

    return (
        false,
        (
            <label>
                <Field name={name} {...rest} />
                <ErrorMessage name={name} />
            </label>
        )
    );
}