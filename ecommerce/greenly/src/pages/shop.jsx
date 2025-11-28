import React from "react";
import "./shop.css";

import product1 from "../assets/product1.jpeg";
import product2 from "../assets/product2.jpeg";
import product3 from "../assets/product3.jpeg";
import product4 from "../assets/product4.jpeg";
import product5 from "../assets/product5.jpeg";
import product6 from "../assets/product6.jpeg";
import product7 from "../assets/product7.jpeg";
import product8 from "../assets/product8.jpeg";
import product9 from "../assets/product9.jpeg";
import product10 from "../assets/product10.jpeg";
import product11 from "../assets/product11.jpeg";
import product12 from "../assets/product12.jpeg";

const products = [
  { id: 1, name: "Freshly-Harvested-Carrot", price: "$12", image: product1 },
  { id: 2, name: "Juicy-Tomatoes", price: "$8", image: product2 },
  { id: 3, name: "Organic-Eggplant", price: "$15", image: product3 },
  { id: 4, name: "Greenly-Cucumber", price: "$5", image: product4 },
  { id: 5, name: "Crunchy-Lettuce", price: "$9", image: product5 },
  { id: 6, name: "Fresh-Spinach", price: "$10", image: product6 },
  { id: 7, name: "Sweet-Corn", price: "$7", image: product7 },
  { id: 8, name: "Bell-Pepper-Mix", price: "$13", image: product8 },
  { id: 9, name: "Organic-Broccoli", price: "$14", image: product9 },
  { id: 10, name: "Green-Beans", price: "$6", image: product10 },
  { id: 11, name: "Cherry-Tomatoes", price: "$11", image: product11 },
  { id: 12, name: "Farm-Fresh-Onions", price: "$8", image: product12 },
];

function Shop() {
  return (
    <div className="shop-container">
      <h1 className="shop-title">Shop Our Fresh Products 🌿</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="price">{product.price}</p>
              <button className="btn-add">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
