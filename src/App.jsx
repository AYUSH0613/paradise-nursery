import { useState } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div>
      <h1>Welcome to Paradise Nursery</h1>

      {!showProducts ? (
        <button onClick={() => setShowProducts(true)}>
          Get Started
        </button>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;
