import { useState, useEffect } from "react";
import "../Styles/login.css";
// import axios from 'axios';
// import { useNavigate, Link } from "react-router-dom";
export default function LoginPage() {
    // const navigate = useNavigate();
    const [id, setid] = useState("")
    const [pass, setpass] = useState("")
    const [credential, setCredential] = useState([]);

    // useEffect(() => {
    //     // Fetching user credentials from API
    //     axios.get('http://localhost:8080/api/getcred')
    //         .then(response => setCredential(response.data))
    //         .catch(error => console.error(error));
    // }, []);


    // function handleLogin() {
    //     var l=true;
    //     credential.map((cred) =>{
    //         if (cred.email === id && cred.password === pass) {
    //             l=true

    //         }
    //     });

    //     if (l) {
    //         props.changeLog()
    //         navigate("/home")
    //         console.log("logged in")
    //     }
    //     else {
    //         console.log("logged out")
    //         console.log(credential.email)


    //     }
    // }
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