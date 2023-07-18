import NavBar from "./NavBar";
import "../Styles/home.css";
import { useState } from "react";
import axios from 'axios';

export default function Products({ prod, cart, setcart, id }) {
    let data = JSON.parse(localStorage.getItem("data"));

    const [productName, setProductName] = useState(prod.productName);
    const [userId, setUserId] = useState(data.email);
    const [price, setPrice] = useState(prod.price);
    const [productQuantity, setProductQuantity] = useState(0);
    const [imageUrl, setImageUrl] = useState(prod.imageUrl);
    const [status, setStatus] = useState("In Progress");

    const cartHandler = () => {
        const payload = {
            productName: productName,
            userId: userId,
            price: price,
            quantity: productQuantity,
            imageUrl: imageUrl
          };
          
        axios.post("http://localhost:8080/addcart", payload).then(response => {
            // console.log(response.data)
        }).catch(error => console.log(error));

    }

    function increaseQuantity() {
        setProductQuantity(productQuantity + 1);
    }

    function decreaseQuantity() {
        setProductQuantity(productQuantity - 1);
    }
    const orderHandler=(prod)=>{
        const item={
          productName:prod.productName,
          quantity:productQuantity,
          price:prod.price
        };
        
        const newOrder = {
          userId: userId,
          orderItems: [item],
          status: status
        };
        
        console.log(newOrder);
        
        try {
          axios.post('http://localhost:8080/placeOrder', newOrder);
          } catch (error) {
              console.error(error);
          }
      }
    


    return (
        <>
            <div className="grid">
                <img src={prod.imageUrl} alt="My Image" ></img>
                <div className="nameprice">
                    <div className="BL">{prod.productName}</div><br /><br />
                    <div className="BL" >{prod.price}</div><br />
                    <button className="quantityHandler" onClick={decreaseQuantity}>-</button>
                    <button className="quantityHandler">{productQuantity}</button>
                    <button className="quantityHandler" onClick={increaseQuantity}>+</button>
                    {/* <p>{userId}</p> */}
                    <button id="cartbutton" className="BL" onClick={()=>orderHandler(prod)}>Place order</button>
                    <button id="cartbutton" className="BL" onClick={() => cartHandler(prod)}>Add to cart</button>

                </div>


            </div>


        </>
    )
}