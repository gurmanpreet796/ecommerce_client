import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import HomePage from './customer/pages/HomePage/HomePage';
//import Product from './customer/components/Product/Product';
import Footer from './customer/components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';

function App() {
  return (<>
    <Navigation/>
     {/* <HomePage/> */}
     {/* <Product/> */}
     <ProductDetails/>
     <Footer/>
      </>
  );
}

export default App;
