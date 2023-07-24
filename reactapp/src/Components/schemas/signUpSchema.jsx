import * as Yup from "yup";

export const signUpSchema = Yup.object({
  userName: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  mobileNumber: Yup.string().min(10).max(10).required("Please enter your Mobilenumber"),
  password: Yup.string().min(6).required("Please enter your password"),
  confirmpassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
});