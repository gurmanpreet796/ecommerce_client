import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../customer/pages/HomePage/HomePage';
import Cart from '../customer/components/Cart/Cart';
import Footer from '../customer/components/Footer/Footer';
import Navigation from '../customer/components/Navigation/Navigation';
import Product from '../customer/components/Product/Product';
import ProductDetails from '../customer/components/ProductDetails/ProductDetails';
import Checkout from '../customer/components/Checkout/Checkout';
import Order from '../customer/components/order/Order';
import OrderDetails from '../customer/components/order/OrderDetails';

const CustomerRoutes = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:lavelOne/:lavelTwo/:lavelThree" element={<Product />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account/order" element={<Order />} />
        <Route path="/account/order/:orderId" element={<OrderDetails />} />
      </Routes>
{/* 
      <div>
        <Footer />
      </div> */}
    </div>
  );
};

export default CustomerRoutes;
