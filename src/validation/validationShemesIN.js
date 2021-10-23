import * as yup from "yup";

export const passwordRegex =
    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/;

export const SIGNUP_SCHEME = yup
    .object()
    .required()
    .shape({

        email: yup.string().email("Invalid Email, please try again").required(),

        password: yup.string().matches(passwordRegex, "Invalid Passoword, please try again").required(),

    });