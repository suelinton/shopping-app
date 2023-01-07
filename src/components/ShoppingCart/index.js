import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export const ShoppingCart = (props) => {
  const cart = useCart();

  return (
    <>
      <div>
        <h3>Shopping Cart</h3>
        <ul>
          {cart.items.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price} - {item.quantity} -{" "}
              {item.quantity * item.price}
              <button onClick={() => cart.handleRemoveItem(item.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
        <h3>
          Total: ${cart.items.reduce((total, item) => total + item.price, 0)}
        </h3>
      </div>
      <Link to="/">Continuar comprando</Link>
    </>
  );
};
