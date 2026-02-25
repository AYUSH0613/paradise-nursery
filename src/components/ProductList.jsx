import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

function ProductList() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const plants = {
    Indoor: [
      { id: 1, name: "Aloe Vera", price: 10, image: "https://via.placeholder.com/100" },
      { id: 2, name: "Snake Plant", price: 15, image: "https://via.placeholder.com/100" }
    ],
    Outdoor: [
      { id: 3, name: "Rose", price: 12, image: "https://via.placeholder.com/100" },
      { id: 4, name: "Tulip", price: 9, image: "https://via.placeholder.com/100" }
    ],
    Succulent: [
      { id: 5, name: "Cactus", price: 8, image: "https://via.placeholder.com/100" },
      { id: 6, name: "Bonsai", price: 25, image: "https://via.placeholder.com/100" }
    ]
  };

  return (
    <div>
      <nav>
        <h3>Cart: {cart.length}</h3>
      </nav>

      {Object.keys(plants).map(category => (
        <div key={category}>
          <h2>{category}</h2>

          {plants[category].map(plant => {
            const isAdded = cart.find(item => item.id === plant.id);

            return (
              <div key={plant.id}>
                <img src={plant.image} alt={plant.name} />
                <h3>{plant.name}</h3>
                <p>${plant.price}</p>

                <button
                  disabled={isAdded}
                  onClick={() => dispatch(addItem(plant))}
                >
                  {isAdded ? "Added" : "Add to Cart"}
                </button>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
