import * as yup from "yup";

export const passwordRegex =
    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/;

export const firstnameRegex = /^[\w]{3,30}$/;
export const lastnameRegex = /^[\w]{3,30}$/;

export const SIGNUP_SCHEME = yup
    .object()
    .required()
    .shape({

        firstname: yup
            .string()
            .matches(firstnameRegex, "Not valid")
            .required("Firstname is required"),

        displayname: yup
            .string()
            .matches(firstnameRegex, "Not valid")
            .required("Displayname is required"),

        lastname: yup
            .string()
            .matches(firstnameRegex, "Not valid")
            .required("Lastname is required"),


        email: yup
            .string()
            .email("Invalid Email, please try again").required("Email is required"),

        password: yup
            .string()
            .matches(passwordRegex, "Invalid Passoword, please try again")
            .required("Password is required"),

        confPassword: yup
            .string()
            .matches(passwordRegex, "Invalid Passoword, please try again")
            .required("Confirm is required"),

        

    });


