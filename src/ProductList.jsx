import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';

function ProductList() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const [addedToCart, setAddedToCart] = useState({});

  // Calculate total cart quantity for the navbar icon
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prevState) => ({
      ...prevState,
      [plant.name]: true,
    }));
  };

  const plantsArray = [
    {
      category: "Indoor Plants",
      plants: [
        { id: 1, name: "Snake Plant", price: "$15", image: "https://images.unsplash.com/photo-1628170333796-281ce12b0e90" },
        { id: 2, name: "Spider Plant", price: "$12", image: "https://images.unsplash.com/photo-1616843477121-704cb7b4458f" },
        { id: 3, name: "Peace Lily", price: "$18", image: "https://images.unsplash.com/photo-1593696954577-ab3d39317b97" },
        { id: 4, name: "Monstera", price: "$25", image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b" },
        { id: 5, name: "Pothos", price: "$10", image: "https://images.unsplash.com/photo-1610419812497-268e3cb0b3cb" },
        { id: 6, name: "ZZ Plant", price: "$20", image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361" }
      ]
    },
    {
      category: "Succulents",
      plants: [
        { id: 7, name: "Aloe Vera", price: "$8", image: "https://images.unsplash.com/photo-1596547609652-9fc5d8d42e4b" },
        { id: 8, name: "Jade Plant", price: "$12", image: "https://images.unsplash.com/photo-1601004128522-861f4356e879" },
        { id: 9, name: "Echeveria", price: "$9", image: "https://images.unsplash.com/photo-1551893665-f843f600794e" },
        { id: 10, name: "Zebra Plant", price: "$14", image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b" },
        { id: 11, name: "Burro's Tail", price: "$16", image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd" },
        { id: 12, name: "String of Pearls", price: "$15", image: "https://images.unsplash.com/photo-1604169542031-6b2a488e7d2e" }
      ]
    },
    {
      category: "Ferns",
      plants: [
        { id: 13, name: "Boston Fern", price: "$14", image: "https://images.unsplash.com/photo-1598881034458-154ceea5cb29" },
        { id: 14, name: "Bird's Nest Fern", price: "$18", image: "https://images.unsplash.com/photo-1606774653805-4f4c84a56a64" },
        { id: 15, name: "Maidenhair Fern", price: "$16", image: "https://images.unsplash.com/photo-1582736417743-41a6b093226a" },
        { id: 16, name: "Staghorn Fern", price: "$22", image: "https://images.unsplash.com/photo-1579412530182-1fb3a129d20c" },
        { id: 17, name: "Kangaroo Paw Fern", price: "$20", image: "https://images.unsplash.com/photo-1596700762113-149b809a473b" },
        { id: 18, name: "Button Fern", price: "$12", image: "https://images.unsplash.com/photo-1616843477121-704cb7b4458f" }
      ]
    }
  ];

  return (
    <div>
      {/* Navbar implementation */}
      <div className="navbar">
        <a href="#home">Home</a>
        <a href="#plants">Plants</a>
        <a href="#cart">
          Cart 
          <span className="cart-icon">🛒</span> 
          <span className="cart-quantity">{totalQuantity}</span>
        </a>
      </div>

      {/* Product Listing */}
      <div className="product-list">
        {plantsArray.map((categoryGroup, index) => (
          <div key={index}>
            <h2 className="category-heading">{categoryGroup.category}</h2>
            <div className="plants-grid">
              {categoryGroup.plants.map((plant) => (
                <div key={plant.id} className="plant-card">
                  <img src={plant.image} alt={plant.name} className="plant-thumbnail" />
                  <h3>{plant.name}</h3>
                  <p>{plant.price}</p>
                  <button 
                    onClick={() => handleAddToCart(plant)}
                    disabled={addedToCart[plant.name]}
                  >
                    {addedToCart[plant.name] ? "Added to Cart" : "Add to Cart"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
