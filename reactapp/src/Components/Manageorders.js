import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Orders.css';
import CardComponent from './CardComponent';
import NavBar from './NavBar';


function Manageorders() {
  const [orders, setOrders] = useState([]);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:8093/admin/orders')
      .then(response => {
        setOrders(response.data);
      })
      .catch(error => {
        console.error('Error fetching orders:', error);
      });
  }, []);

  const handleClick = orderId => {
    setSelectedOrderId(orderId);
  };
  const handleCloseCard = () => {
    setSelectedOrderId(null);
  };

  return (
    <>
    <NavBar />
      <div id="adminOrders">
        <div className="frame1">
          {orders.length ? (
            <div className="cartGrid">
              <div className="cartTable">
                <table>
                  <thead>
                    <tr>
                      <th id="orderId">Order ID</th>
                      <th id="userId">User ID</th>
                      <th id="totalPrice">Total Price</th>
                      <th></th>
                    </tr>
                  </thead>
                  {orders.map((order, index) => {
                    const isCardVisible = order.orderId === selectedOrderId;

                    return (
                      <tbody key={index}>
                        <tr>
                          <td>{order.orderId}</td>
                          <td>{order.userId}</td>
                          <td>{order.totalPrice}</td>
                          <td>
                            <button id="cartbutton" className="BC" onClick={() => handleClick(order.orderId)}>
                              View Order Items
                            </button>
                            {isCardVisible && (
                              <CardComponent orderItems={order.orderItems} onClose={handleCloseCard}/>
                            )}
                          </td>
                        </tr>
                        
                      </tbody>
                    );
                  })}
                </table>
              </div>
            </div>
          ) : (
            <h1>No customer placed order yet</h1>
          )}
        </div>
      </div>
    </>
  );
}

export default Manageorders;
