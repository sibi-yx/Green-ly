import React, { useState } from "react";
import "./cart.css";
import { FaTrashAlt, FaLeaf } from "react-icons/fa";

function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Fresh Carrots", price: 12, quantity: 2, image: "/images/product1.jpeg" },
    { id: 2, name: "Organic Tomatoes", price: 8, quantity: 1, image: "/images/product2.jpeg" },
    { id: 3, name: "Green Cucumbers", price: 5, quantity: 3, image: "/images/product3.jpeg" },
  ]);

  const handleQuantityChange = (id, amount) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h1 className="cart-title">
        <FaLeaf className="leaf-icon" /> Your Greenly Cart
      </h1>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty 🌿</p>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} className="cart-img" />
                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <p>${item.price.toFixed(2)}</p>
                  <div className="quantity-control">
                    <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                  </div>
                </div>
                <div className="cart-remove">
                  <button onClick={() => handleRemove(item.id)} className="remove-btn">
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>
            <p>Total Items: {cartItems.length}</p>
            <h3>Total: ${total.toFixed(2)}</h3>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
