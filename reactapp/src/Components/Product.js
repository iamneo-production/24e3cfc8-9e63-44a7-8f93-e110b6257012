import NavBar from "./NavBar";
import "./home.css";
import { useState } from "react";

export default function Products({prod,cart,setcart}){
    // const [cart, setcart]=useState([]);
    // function al(){
    //     alert("clicked")
    // }
   

    const cartHandler=(prod)=>{
   
          setcart([...cart,prod]);
          console.log(cart);
        }


    return(
        <>
        <div className="grid">
        <img src={prod.imageUrl} alt="My Image" ></img>
        <div className="nameprice">
        <div className="BL">{prod.productName}</div><br /><br />
        <div className="BL" >{prod.price}</div><br />
        <button id="cartbutton" className="BL" onClick={()=>cartHandler(prod)}>Add to cart</button>
        
        </div>
        

        </div>
       
        
        </>
    )
}