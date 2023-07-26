import React,{useState,useEffect} from 'react';
import axios from 'axios';
import "../Styles/home.css";

export default function OrderButton ({ prod ,userId ,productQuantity}){
    const orderHandler=()=>{
        const item={
          productName:prod.productName,
          quantity:productQuantity,
          price:prod.price
        };
        
        const newOrder = {
          userId: userId,
          orderItems: [item],
          status:"In Progress"
        };
        
        console.log(newOrder);
        
        try {
                axios.post('https://8080-ecdecfbaaafafbbcefaabfececdfccc.project.examly.io/saveOrders', newOrder);
                } catch (error) {
                  console.error(error);
                }
          }
        return(
            <button id="cartbutton" className="BL" onClick={orderHandler}>
      place order
    </button>
        );
}