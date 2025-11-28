import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './pages/navbar';
import Home from './pages/home';
import Shop from './pages/shop';
import Contact from './pages/contact';
import About from './pages/about';
import Login from './pages/login';
import Signup from './pages/signup';
import Cart from './pages/cart';
function App() {
  return (
    <div>
     <Router>
      <Navbar />
          <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App