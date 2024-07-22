// App.js
import "./App.css"
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './customer/pages/HomePage/HomePage';
import Cart from './customer/components/Cart/Cart';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Checkout from './customer/components/Checkout/Checkout';
import Order from './customer/components/Order/Order';
import OrderDetails from './customer/components/Order/OrderDetails';
import Navigation from './customer/components/Navigation/Navigation';
import Footer from "./customer/components/Footer/Footer";
import RegisterForm from "./customer/Auth/RegisterForm";
import LoginForm from "./customer/Auth/LoginForm";
function App() {
  return (

      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:lavelOne/:lavelTwo/:lavelThree" element={<Product />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account/order" element={<Order />} />
          <Route path="/account/order/:orderId" element={<OrderDetails />} />
          <Route path="/register" element={<HomePage />} />  {/* Add Register route */}
        <Route path="/login" element={<HomePage />} />  {/* Add Login route */}
        </Routes>
      <Footer/>
      </div>

  );
}

export default App;
