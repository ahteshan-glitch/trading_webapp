import './App.css';
import HomePage from "./landing_page/home/HomePage.jsx"
import SignUp from "./landing_page/signup/Signup.jsx"
import PricingPage from "./landing_page/pricing/PricingPage.jsx"
import About from "./landing_page/about/AboutPage.jsx"
import NotFound from "./landing_page/NotFound.jsx"
import SupportPage from "./landing_page/support/SupportPage.jsx"
import ProductPage from "./landing_page/product/productpage.jsx"

import { Routes, Route } from 'react-router-dom';

function App() {


  return (
  
    <Routes> 
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/about" element={<About />} />
      
      
      <Route path="/support" element={<SupportPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    
  
    
   
   
  )
}

export default App;
