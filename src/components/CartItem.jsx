import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";

function CartItem() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>

      {cart.map(item => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>${item.price}</p>

          <button onClick={() =>
            dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
          }>
            +
          </button>

          <span>{item.quantity}</span>

          <button onClick={() =>
            dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
          }>
            -
          </button>

          <button onClick={() => dispatch(removeItem(item.id))}>
            Delete
          </button>

          <p>Total: ${item.price * item.quantity}</p>
        </div>
      ))}

      <h2>Total Cart Amount: ${total}</h2>

      <button>Checkout (Coming Soon)</button>
      <br />
      <a href="/">Continue Shopping</a>
    </div>
  );
}

export default CartItem;
