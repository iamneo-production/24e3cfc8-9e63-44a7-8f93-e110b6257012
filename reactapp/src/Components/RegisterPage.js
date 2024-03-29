import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useFormik } from "formik";
import {signUpSchema} from "./schemas/signUpSchema";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import '../styles/register.css';

const initialValues = {
  userName: "",
  email: "",
  password: "",
  mobileNumber: "",
  confirmpassword: "",
};

export default function RegisterPage() {
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        handleSignup(values);
        action.resetForm();
      },
    });
    console.log(
      
      
    );

  const handleSignup = () => {
    axios.post("https://8080-bbfbddbccbeeeffafbbcefaabfececdfccc.project.examly.io/signup", values)
      .then((response) => {
        // toast("Registration successful");
        console.log(response.data);
        navigate('/');
      })
      .catch((error) => console.log(error));
  };

  return (
    <div style={{backgroundColor:"white",height:"100vh"}}>
      <div className="register-header">Register</div>
      <div className="register-box">
        <h1 className="register-title">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="register-input"
            value={values.email}
            autoComplete="off"
            onChange={handleChange}
            onBlur={handleBlur}
            id="email"
            name="email"
            placeholder="Email"
          />
          {touched.email && errors.email ? (
            <p className="register-error">{errors.email}</p>
          ) : null}

          <input
            className="register-input"
            id="userName"
            autoComplete="off"
            name="userName"
            value={values.userName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Username"
          />
          {touched.userName && errors.userName ? (
            <p className="register-error">{errors.userName}</p>
          ) : null}

          <input
            className="register-input"
            value={values.mobileNumber}
            autoComplete="off"
            onChange={handleChange}
            onBlur={handleBlur}
            id="mobileNumber"
            name="mobileNumber"
            placeholder="Mobile Number"
          />
          {touched.mobileNumber && errors.mobileNumber ? (
            <p className="register-error">{errors.mobileNumber}</p>
          ) : null}

          <input
            className="register-input"
            type="password"
            value={values.password}
            autoComplete="off"
            onChange={handleChange}
            onBlur={handleBlur}
            id="password"
            name="password"
            placeholder="Password"
          />
          {touched.password && errors.password ? (
            <p className="register-error">{errors.password}</p>
          ) : null}

          <input
            className="register-input"
            type="password"
            value={values.confirmpassword}
            autoComplete="off"
            onChange={handleChange}
            onBlur={handleBlur}
            id="confirmpassword"
            name="confirmpassword"
            placeholder="Confirm Password"
          />
          {touched.confirmpassword && errors.confirmpassword ? (
            <p className="register-error">{errors.confirmpassword}</p>
          ) : null}

          <div>
            <button
              className="register-submit"
              id="submitButton"
              type="submit"
              disabled={Object.keys(errors).length !== 0}
            >
              Submit
            </button>
          </div>
        </form>

        <div>Already a User?<Link to="/" style={{ textDecoration: 'none' }}> Login</Link></div>
      </div>
    </div>
  );
}
