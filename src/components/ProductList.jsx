import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

function ProductList() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const plants = [
    { id: 1, name: "Aloe Vera", price: 10, category: "Indoor", image: "https://via.placeholder.com/100" },
    { id: 2, name: "Snake Plant", price: 15, category: "Indoor", image: "https://via.placeholder.com/100" },
    { id: 3, name: "Cactus", price: 8, category: "Succulent", image: "https://via.placeholder.com/100" },
    { id: 4, name: "Bonsai", price: 25, category: "Indoor", image: "https://via.placeholder.com/100" },
    { id: 5, name: "Rose", price: 12, category: "Outdoor", image: "https://via.placeholder.com/100" },
    { id: 6, name: "Tulip", price: 9, category: "Outdoor", image: "https://via.placeholder.com/100" }
  ];

  return (
    <div>
      <nav>
        <h3>Cart Items: {cart.length}</h3>
      </nav>

      <h2>Plants</h2>

      {plants.map(plant => (
        <div key={plant.id}>
          <img src={plant.image} alt={plant.name} />
          <h3>{plant.name}</h3>
          <p>${plant.price}</p>
          <p>{plant.category}</p>

          <button
            disabled={cart.find(item => item.id === plant.id)}
            onClick={() => dispatch(addItem(plant))}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
