import NavBar from "./NavBar";
import "../styles/home.css";
import { useState } from "react";
import axios from 'axios';
import OrderButton from './OrderButton';

export default function Products({ prod, cart, setcart, id }) {
    let data = JSON.parse(localStorage.getItem("data"));

    const [productName, setProductName] = useState(prod.productName);
    const [userId, setUserId] = useState(data.email);
    const [price, setPrice] = useState(prod.price);
    const [productQuantity, setProductQuantity] = useState(1);
    const [imageUrl, setImageUrl] = useState(prod.imageUrl);

    const cartHandler = () => {
        const payload = {
            productName: productName,
            userId: userId,
            price: price,
            quantity: productQuantity,
            imageUrl: imageUrl
          };
          
        axios.post("https://ide-ecdecfbaaafafbbcefaabfececdfccc.project.examly.io/proxy/8080/addcart", payload).then(response => {
            console.log(response.data)
        }).catch(error => console.log(error));

    }

    function increaseQuantity() {
        if(productQuantity<prod.quantity){
        setProductQuantity(productQuantity + 1);
        }
    }

    function decreaseQuantity() {
        if(productQuantity>1){
        setProductQuantity(productQuantity - 1);
        }
    }
   


    return (
        <>
            <div className="grid">
                <img src={prod.imageUrl} alt="My Image" ></img>
                <div className="nameprice">
                    <div className="BL">{prod.productName}</div>
                    <div className="BR" >&#x20B9;{prod.price}</div><br />
                    <button className="quantityHandler" onClick={decreaseQuantity}>-</button>
                    <button className="quantityHandler">{productQuantity}</button>
                    <button className="quantityHandler" onClick={increaseQuantity}>+</button>
                    {/* <p>{userId}</p> */}
                    <OrderButton prod={prod} userId={userId} productQuantity={productQuantity} />
                    <button id="cartbutton" className="BL" onClick={() => cartHandler(prod)}>Add to cart</button>

                </div>


            </div>


        </>
    )
}