import { useState } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  const handleGetStarted = () => {
    setShowProducts(true);
  };

  return (
    <div className="app-container">
      <h1>Welcome to Paradise Nursery</h1>

      {!showProducts ? (
        <button onClick={handleGetStarted}>
          Get Started
        </button>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;
