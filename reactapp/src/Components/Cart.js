import NavBar from "./NavBar";
// import "./home.css";
// import Carts from "./Carts"
import { useEffect, useState } from 'react';
import "../Styles/cart.css"
import axios from 'axios';

export default function Cart({cart,order,setorder,setcart}){
  let data=JSON.parse(localStorage.getItem("data"));
  const [id,setid]=useState(data.email)
  const [cartItems, setcartItems]=useState([])
  const [deleteCartId, setdeleteCartId]=useState(0)
  useEffect(() => {
    axios.get(`http://localhost:8080/cart/${id}`).then(response => {
      setcartItems(response.data);
    }).catch(error => console.log(error))
  }, [cartItems])

  const handleDeleteCartItem = (id,name) => {
    // console.log(cartItemId)
    axios.delete(`http://localhost:8080/cart/delete/${id}`).then(response => {
      console.log(response.data)
    }).catch((error) => {
      console.log(error)
    })
    // setcartItems(prevcartItems => prevcartItems.filter(product => product.productName !== name));
    // console.log("deleted product")

  };

function handleOrder(){
  
}

    return(
        <>
        <NavBar />
        {cartItems.length ?
        <div className="frame1">
        <div className="cartGrid">
          
        <div className="cartTable">
                    <table>
                    <thead >
                      <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                        {/* <th>id</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item, index) => (
                        <tr key={index}>
                          
                          <td>{index + 1}.&nbsp;&nbsp;{item.productName}</td>
                          <td>{item.price}</td>
                          <td>{item.quantity}</td>
                          <td><button onClick={() => handleDeleteCartItem(item.cartItemID,item.productName)} id={`deleteProduct${id}`} >remove</button></td>
                          {/* <td>{item.cartItemID}</td> */}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  </div>
                  <button onClick={handleOrder} className="placeButton">Place order</button>
                  </div>
                 
                  </div> : <h1>Cart is empty</h1> }
                  

        </>
    )
}