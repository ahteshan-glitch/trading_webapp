import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from "./landing_page/Navbar.jsx"
import Footer from "./landing_page/Footer.jsx"
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
   <Navbar/>
      <App />
    <Footer/>
    </BrowserRouter>
  </StrictMode>
)
