import * as Yup from 'yup';

export const inputSchemas = Yup.object({

    username: Yup.string()
        .required('Username is required')
        .min(3, 'Username must be at least 3 characters long')
        .matches(/^[a-zA-Z0-9_]{3,}$/, "Username must be alphanumeric"),

    email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),

    password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters long')
        .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/, "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"),

    confirmPassword: Yup.string()
        .required('Confirm Password is required')
        .oneOf([Yup.ref('password')], 'Password must match'),

})