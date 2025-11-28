import React from 'react'
import { FaSearch , FaShoppingCart } from 'react-icons/fa';
import { GoPersonFill } from 'react-icons/go';
import './navbar.css'
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div>
        <div className="navcontainer">
            <h1 className='logo'>GREEN-ly</h1>
            <div className="navlinks">
            <ul type="none">
                <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>HOME</NavLink>
          </li>
          <li>
            <NavLink to="/shop" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>SHOP</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>ABOUT</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>CONTACT</NavLink>
          </li>
            </ul></div>
            <div className="navicons">
                <ul type="none">
                    <li><FaSearch size={25}/></li>
                    <li><NavLink to="/login" className="account"><GoPersonFill size={30}/></NavLink></li>
                    <li><NavLink to="/cart" className="cart"><FaShoppingCart size={30}/></NavLink></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar