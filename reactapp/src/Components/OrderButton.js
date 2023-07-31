import React,{useState,useEffect} from 'react';
import axios from 'axios';
import "../styles/home.css";

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
                axios.post('https://8080-bbfbddbccbeeeffafbbcefaabfececdfccc.project.examly.io/saveOrder', newOrder);
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