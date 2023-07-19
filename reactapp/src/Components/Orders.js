import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import "./home.css";
import axios from "axios";
import { getcurrentuser } from "./auth/authentication";
import {Link } from 'react-router-dom';
import OrderItems from "./OrderItems";
export default function Orders({order,setcart}){
 const [orders,setOrders] =useState([]);
  const user=getcurrentuser();
  useEffect(()=>
  {
    axios.get('https://ide-ecdecfbaaafafbbcefaabfececdfccc.project.examly.io/proxy/8080/orders',{
      params: {
        userId: user.email
    }
  }
  ).then(response=>
      {
        setOrders(response.data);
        console.log(response.data);
      }).catch(error=>console.log(error))
  },[])
    return(
        <>
        <NavBar />
        { orders.length ?
        <div className="frame1">
        <div className="cartGrid">
          
        <div className="cartTable">
                    <table>
                    <thead >
                      <tr>
                        <th>OrderId  </th>
                        <th>Total Price</th>
                        <th>OrderItems</th>
                      </tr>
                    </thead>
                      {orders.map((order, index) => {
                        return (
                          <tbody className="outerRow" key={index}>
                        <tr key={index}>
                          <td>{index + 1}.&nbsp;&nbsp;{order.orderId}</td>
                          <td>{`Rs ${order.totalPrice}`}</td>
                          <td><Link  to={{
                    pathname: `/orderItems/${order.orderId}`,
                  }}>Order Items</Link></td>
                        </tr>
                    </tbody>
                        );
                      })}
                  </table>
                  </div>
                  </div>
                  </div> : <h1>No any order placed yet</h1> }

        </>
    )
}