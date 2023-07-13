import './App.css';
<<<<<<< HEAD
=======
import LoginPage from "./Components/LoginPage"
import PrivatRoute from "./Components/PrivatRoute"
import Product from "./Components/Product"
import Home from "./Components/Home"
import Cart from "./Components/Cart"
import Orders from "./Components/Orders"
import RegisterPage from "./Components/RegisterPage"
import ManageOrders from './Components/ManageOrders';
import Manageproducts from './Components/ManageProducts';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import NavBar from './Components/NavBar';
import { useState } from 'react';
import { doLogout } from './Components/auth/authentication';

>>>>>>> 0ba4f914c02f62978505501554460576575d8b0a

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
<<<<<<< HEAD
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
    <BrowserRouter>
      <Routes>
        
        <Route element={<PrivatRoute Auth={Auth}/>} >
        <Route path="home" element={<Home Logout={Logout} cart={cart} setcart={setcart}/>} />
        <Route path="cart" element={<Cart cart={cart} order={order} setorder={setorder} setcart={setcart}/>} />
        <Route path="orders" element={<Orders  order={order} setcart={setcart} />} />
        <Route path="manageorders" element={<ManageOrders/>} />
        <Route path="manageproducts" element={<Manageproducts/>} />
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
   
>>>>>>> 0ba4f914c02f62978505501554460576575d8b0a
  );
}

export default App;

