import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import "../styles/home.css";
import axios from 'axios';
import { isLoggedIn } from "./auth/authentication";
import Product from "./Product";

export default function Home({ Logout, cart, setcart }) {
    let data = JSON.parse(localStorage.getItem("data"));
    const [id, setid] = useState(data.email)
    const [product, setproduct] = useState([])
    const [user, setUser] = useState(false);
    useEffect(() => {
        // Fetch getproductproduct details from the API
        axios.get("https://8080-ecdecfbaaafafbbcefaabfececdfccc.project.examly.io/home").then(response => {
            setproduct(response.data);
            setUser(isLoggedIn());
            console.log(response.data);
        }).catch(error=>console.log(error))
        
    }, []);

    if (!product) {
        return <div>Loading</div>
    }
    return (
        <>
            <NavBar Logout={Logout} />
            <div id="productHomeBody" className="homePage">
                <h1 style={{fontFamily: 'Gill Sans' }}>Welcome</h1>
                {user ? product.map((prod, idd) => (
                    <Product prod={prod} cart={cart} setcart={setcart} key={idd} id={id} />
                )) : <h1>Admin</h1>}
            </div>

        </>
    )
}
