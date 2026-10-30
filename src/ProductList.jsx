import React from 'react';

function ProductList() {
  const plants = [
    { id: 1, name: 'Aloe Vera', price: '$10', category: 'Succulent' },
    { id: 2, name: 'Snake Plant', price: '$15', category: 'Indoor' }
  ];

  return (
    <div className="product-list">
      <h2>Our Plants</h2>
      <div className="plants-grid">
        {plants.map(plant => (
          <div key={plant.id} className="plant-card">
            <h3>{plant.name}</h3>
            <p>{plant.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
