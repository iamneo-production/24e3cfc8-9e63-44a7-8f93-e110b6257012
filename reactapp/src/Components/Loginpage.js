import { useState, useEffect } from "react";
import "../Styles/login.css";

export default function LoginPage() {
    const [id, setid] = useState("")
    const [pass, setpass] = useState("")
    const [credential, setCredential] = useState([]);


    return (
        <>
            <div className="header">Login</div>
            <div id="loginBox">
                <input  className="input" id="email" placeholder="Enter email"></input><br />
                <input type="password" className="input" id="password" placeholder="Enter password"></input>
                <div><button id="loginButton" >Login</button></div>
                <div>New user? Sign Up</div>

            </div>
        </>

    );
}