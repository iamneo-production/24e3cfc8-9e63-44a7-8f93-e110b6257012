import { useState, useEffect } from "react";
import "./login.css";
export default function LoginPage(props) {
    const [data, setData] = useState({
        email:"",
        password:""
    });

    const handleLogin =()=>
    {
        alert(clicked);
    }
    
    return (
        <>
            <div className="header">Login</div>
            <div id="loginBox">
                <input onChange={(e) => setData({...data,email:e.target.value})} className="input" id="email" placeholder="Enter email"></input><br />
                <input onChange={(e) => setData({...data,password:e.target.value})} type="password" className="input" id="password" placeholder="Enter password"></input>
                <div><button id="loginButton" onClick={handleLogin}>Login</button></div>
                <div>New user? Sign Up</div>

            </div>
        </>

    );
}