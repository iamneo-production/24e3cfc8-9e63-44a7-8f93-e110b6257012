import { useState } from "react";
import "./login.css";
import {Link, Navigate, useNavigate} from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

export default function RegisterPage(){
  const navigate=useNavigate();
    const [user, setUser] = useState(
      { 
        userName:"",
        email:"",
        password:"",
        mobileNumber:"",
        confirmpassword:""
      }
    );


    const handleSignup = async (e) => {
      console.log(user);
        e.preventDefault();
        const response = axios.post('http://localhost:8080/signup',user).then((response)=>{
          toast("Registration succesfull")
          console.log(response.data)
          navigate('/');
    }).catch((error)=>console.log(error));
    }
    return(
        <>
        
        <div className="header">Register</div>
        <div id="registerBox">
        <h1 style={{color: "blue"}}>Sign Up</h1>
        <form onSubmit={handleSignup}>
        <input className="input" id="email" onChange={(e) => setUser({...user,email:e.target.value})} placeholder="Enter email"></input><br />
        <input className="input" id="username" onChange={(e) => setUser({...user,userName:e.target.value})} placeholder="Enter username"></input><br />
        <input className="input" onChange={(e) => setUser({...user,mobileNumber:e.target.value})} id="mobileNumber" placeholder="Enter Mobilenumber"></input><br />
        <input className="input" type="password" onChange={(e) => setUser({...user,password:e.target.value})} id="password" placeholder="password"></input><br />
        <input className="input" type="password" onChange={(e) => setUser({...user,confirmpassword:e.target.value})} id="cpassword" placeholder="confirm password"></input><br />
      
        <div><button id="submitButton">Submit</button></div>
        </form>

        <div>Already a User?<Link to="/" style={{textDecoration: 'none'}}> Login</Link></div>
        </div>
        </>
    );
}