import React from 'react';
import '../styles/CardComponent.css'
function CardComponent({orderItems,onClose}) {
  return (
    <div className="card-overlay">
        <div className="card-modal">
        <button id="cartbutton" className="BR" onClick={onClose}>
        X
      </button>
      <div>
              <table>
                <thead>
                  <tr>
                    <th id="productName">Product Name</th>
                    <th id="productQuantity">Quantity</th>
                    <th id="productPrice">Price</th>
                  </tr>
                </thead>
                <tbody>
                    {orderItems.map((item, itemIndex) => (
                        <tr key={itemIndex}>
                            <td>{item.productName}</td>
                            <td>{item.quantity}</td>
                            <td>${item.price}</td>
                        </tr>
                    ))}
                </tbody>
              </table>
            </div>
            </div>
    </div>
  );
}

export default CardComponent;
