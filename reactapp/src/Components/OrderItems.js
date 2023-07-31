import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import "../styles/home.css"
import axios from "axios";
import { getcurrentuser } from "./auth/authentication";
import { useLocation, useParams } from 'react-router-dom';

export default function OrderItems(){
//  const [order,setOrder] =useState([]);
  const user=getcurrentuser();
  const [paymentStatus, setPaymentStatus] = useState(null);
  const { orderId } = useParams();
  const [orderItems, setOrderItems] = useState([]);
  const handlePay = async (e) => {
    e.preventDefault();
    setPaymentStatus("Payment successful");
  }
  useEffect(() => {
    fetchOrderItems(orderId);
  }, [orderId]);
  const fetchOrderItems = async (orderId) => {
    try {
      const response = await axios.get(`https://8080-bbfbddbccbeeeffafbbcefaabfececdfccc.project.examly.io/orders/${orderId}`);
      const data = response.data;
      setOrderItems(data.orderItems);
      console.log(orderItems);
    } catch (error) {
      console.log('Error fetching order items:', error);
    }
  };
  console.log(orderId);
    return(
        <>
        <NavBar />
        { true ?
        <div className="frame1">
        <div className="cartGrid">
          
        <div className="cartTable">
                    <table>
                    <thead >
                      <tr>
                        <th>Productname</th>
                        <th>Price</th>
                        <th>Quantity</th>
                      </tr>
                    </thead>
                          <tbody className="outerRow" >
                        {orderItems.map((product)=>(
                        <tr>
                          <td>{product.productName}</td>
                          <td>{`Rs ${product.price}`}</td>
                          <td>{product.quantity}</td>
                        </tr>
                        
                      ))}
                    </tbody>
                  </table>
                  </div>
                  {paymentStatus ? (
                <p style={{ fontWeight: 'bold', color: 'darkblue', textAlign: 'center' }}>{paymentStatus}</p>
              ) : 
                  (<button onClick={handlePay} variant="contained" className="placeButton">Pay</button>)}
                  </div>
                  </div> : <h1>No any order placed yet</h1> }
                  

        </>
    )
}