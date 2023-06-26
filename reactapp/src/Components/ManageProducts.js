import React, { useEffect } from 'react'
import { useState } from 'react';
import NavBar from './NavBar';
import './styles/ProductPage.css';
import axios from 'axios';
export default function Manageproducts() {
    const [products, setProducts] = useState([]);
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productImageUrl, setProductImageUrl] = useState('');
    const [productQuantity, setProductQuantity] = useState('');
    const [id,setId]=useState(1);
    const handleProductNameChange = (event) => {
      setProductName(event.target.value);
    };
  
    const handleProductPriceChange = (event) => {
      setProductPrice(event.target.value);
    };
  
    const handleProductImageUrlChange = (event) => {
      setProductImageUrl(event.target.value);
    };
  
    const handleProductQuantityChange = (event) => {
      setProductQuantity(event.target.value);
    };
    const handleDeleteProduct = (id,name) => {
      axios.get(`http://localhost:8080/admin/delete/${id}`).then(response=>
        {
          console.log(response.data)
        }).catch((error)=>
        {
          console.log(error)
        })
      setProducts(prevProducts => prevProducts.filter(product => product.productName!== name));
    };
    const handleAddProduct = () => {
      const newProduct = {
        productName: productName,
        price: productPrice,
        imageUrl: productImageUrl,
        quantity: productQuantity,
      };
      
      axios.post("http://localhost:8080/admin/addProduct",newProduct).then(response=>
      {
        console.log(response.data)
      }).catch(error=>console.log(error));
      
      setProducts([...products, newProduct]);
      setProductName('');
      setProductPrice('');
      setProductImageUrl('');
      setProductQuantity('');
      setId((prevId) => prevId + 1);
    };
    useEffect(()=>
      {
        axios.get("http://localhost:8080/admin").then(response=>
        {
          setProducts(response.data);
        }).catch(error=>console.log(error))
      },[products])
  
    return (
        <>
        <NavBar/>
      <div className="page-container">
        <div className="content">
        <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={index}>
                    <td>
                      <img src={product.imageUrl} alt={product.name} />
                    </td>
                    <td>{product.productName}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    <td>
                      <button onClick={() => handleDeleteProduct(product.productId,product.productName)} id ={`deleteProduct${id}` }>Delete</button>
                      <button edit={`editProduct${id}`}>Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="form-container">
            <h2>Add Product</h2>
            <input
              type="text"
              placeholder="enter product name"
              id="enterProductName"
              value={productName}
              onChange={handleProductNameChange}
              className="form-input"
            />
            <input
              type="text"
              placeholder="Enter product price"
              id="enterProductPrice"
              value={productPrice}
              onChange={handleProductPriceChange}
              className="form-input"
            />
            <input
              type="text"
              placeholder="Enter image URL"
              id="enterProductimageUrl"
              value={productImageUrl}
              onChange={handleProductImageUrlChange}
              className="form-input"
            />
            <input
              type="text"
              placeholder="Enter product quantity"
              id="enterProductQuantity"
              value={productQuantity}
              onChange={handleProductQuantityChange}
              className="form-input"
            />
            <button onClick={handleAddProduct}    className="add-button">
              Add
      
            </button>
          </div>
          
        </div>
      </div>
      </>
    );
}