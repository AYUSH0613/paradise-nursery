import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";

function CartItem() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  // Total cart amount
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>

      {/* Show message if cart empty */}
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map(item => (
          <div key={item.id}>
            {/* Image */}
            <img src={item.image} alt={item.name} />

            {/* Name & Price */}
            <h3>{item.name}</h3>
            <p>Unit Price: ${item.price}</p>

            {/* Quantity Controls */}
            <button
              onClick={() =>
                dispatch(
                  updateQuantity({
                    id: item.id,
                    quantity: item.quantity + 1
                  })
                )
              }
            >
              +
            </button>

            <span>{item.quantity}</span>

            <button
              onClick={() => {
                if (item.quantity > 1) {
                  dispatch(
                    updateQuantity({
                      id: item.id,
                      quantity: item.quantity - 1
                    })
                  );
                } else {
                  dispatch(removeItem(item.id));
                }
              }}
            >
              -
            </button>

            {/* Delete Button */}
            <button onClick={() => dispatch(removeItem(item.id))}>
              Delete
            </button>

            {/* Total per item */}
            <p>Total: ${item.price * item.quantity}</p>
          </div>
        ))
      )}

      {/* Total Cart Amount */}
      <h2>Total Cart Amount: ${total}</h2>

      {/* Checkout Button */}
      <button onClick={() => alert("Coming Soon")}>
        Checkout
      </button>

      <br />

      {/* Continue Shopping */}
      <a href="/plants">Continue Shopping</a>
    </div>
  );
}

export default CartItem;
