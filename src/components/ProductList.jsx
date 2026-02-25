
import React from "react";

function ProductList() {
  const plants = [
    { id: 1, name: "Aloe Vera", price: 10 },
    { id: 2, name: "Snake Plant", price: 15 },
    { id: 3, name: "Cactus", price: 8 },
    { id: 4, name: "Rose", price: 12 },
    { id: 5, name: "Tulip", price: 9 },
    { id: 6, name: "Bonsai", price: 25 }
  ];

  return (
    <div>
      <h2>Plants</h2>
      {plants.map(p => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>${p.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
