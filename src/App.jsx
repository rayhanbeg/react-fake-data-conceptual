
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react';
import SingleProduct from './SingleProduct';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);


  useEffect(() => {
    fetch('./fakeData.json')
    .then(res => res.json())
    .then(data => {
      setProducts(data)
    });
  } ,[]);


  const handleCart = (product) => {
    
    const isExist = cart.find(item => item.id === product.id);
    // console.log(isExist);

    if (!isExist) {
      setCart([...cart, product])
    }
    else{
      alert("Already exist")
    }
    
  }
// console.log(cart);
// console.log(products);
  return (
    <div>
      
      <div className="main-container">
        <div className="cards-container">
          {
            products.map(product => <SingleProduct key={product.id} product = {product} handleCart = {handleCart}></SingleProduct>)
          }
        </div>
        <div className="card-container">
         <h1> this is cart</h1>
         <div className="cart-title">
          <h5>name</h5>
          <h5>price</h5>
         </div>
         <div>
         {
  cart.map((item, index) => (
    <div key={index}>
      
      <div className='cart-info-div'>
      <p>{index+1}</p>
        <h5>{item.title.slice(0, 10)}</h5>
        <h5>{item.price}</h5>
      </div>
    </div>
  ))
}
         </div>
        </div>
      </div>
      
    </div>
  )
}

export default App
