import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/home';
import Login from './Pages/Login/login';
import { get_product } from './api';
import ProductDetails, { AllProducts } from './Pages/Product/product';
import Navbar from './Components/Navbar/navbar';
import Order from './Pages/Order/order';
import Cart from './Components/Cart/cart';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Layout from './Layout';
import Category from './Components/Category/Category';
import Card from './Components/Cards/card';
import MarkdownEditor from './Components/Loading/sample';
import ProductDetail from './Pages/Product/product';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/category" element={<Category/>}/>
        <Route path="/all_products" element={<AllProducts/>}/>
        <Route path="/product" element={<ProductDetail/>}/>
        <Route path="/sample" element={<MarkdownEditor/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    // <div className="App">

    //   <Navbar/>
    //   {/* <Order /> */}
    //   {/* <Cart/> */}
    //   <Home/>
    //   {/* <Login/> */}
    //   {/* <ProductDetails/> */}
    // </div>
  );
}

export default App;
