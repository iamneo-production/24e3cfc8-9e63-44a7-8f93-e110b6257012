import './App.css';
import LoginPage from "./Components/LoginPage"
import PrivatRoute from "./Components/PrivatRoute"
import Product from "./Components/Product"
import Home from "./Components/Home"
import Cart from "./Components/Cart"
import Orders from "./Components/Orders"
import RegisterPage from "./Components/RegisterPage"
import ManageOrders from './Components/ManageOrders';
import Manageproducts from './Components/Manageproducts';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import NavBar from './Components/NavBar';
import { useState } from 'react';
import { doLogout } from './Components/auth/authentication';
import OrderItems from './Components/OrderItems';


function App() {
  const [Auth, setAuth]=useState(false);
  const [cart, setcart]=useState([]);
  const [order, setorder]=useState([]);

  const changeLog=()=>{
    setAuth(true)
  }
  const Logout=()=>{
    setAuth(false)
    doLogout();
  }
  
  return (
    <BrowserRouter>
      <Routes>
        
        <Route element={<PrivatRoute Auth={Auth}/>} >
        <Route path="home" element={<Home Logout={Logout} cart={cart} setcart={setcart}/>} />
        <Route path="cart" element={<Cart cart={cart} order={order} setorder={setorder} setcart={setcart}/>} />
        <Route path="orders" element={<Orders  order={order} setcart={setcart} />} />
        <Route path="manageorders" element={<ManageOrders/>} />
        <Route path="manageproducts" element={<Manageproducts/>} />
        <Route path="/OrderItems/:orderId" element={<OrderItems/>} />
      </Route>

      {/* <Route element={<PrivatRouteForAdmin Auth={Auth}/>} >
        <Route path="home" element={<AHome Logout={Logout} cart={cart} setcart={setcart}/>} />
        <Route path="cart" element={<Aorders cart={cart} order={order} setorder={setorder} setcart={setcart}/>} />
        <Route path="orders" element={<Orders  order={order} setcart={setcart} />} />
      </Route> */}
       
        <Route path="/" element={<LoginPage Auth={Auth} changeLog={changeLog}/>}/>
        <Route path="register" element={<RegisterPage />} />
      </Routes>
      </BrowserRouter>
   
  );
}

export default App;

