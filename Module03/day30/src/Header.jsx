import { useContext } from "react";
import { CartContext } from "./cartContext"; 

function Header() {
  const { items } = useContext(CartContext);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header>
      <h1>Addis Eats</h1>
      <p>take a bite</p>
      <div className="cart-badge">🛒 Cart Items: {itemCount}</div>
    </header>
  );
}

export default Header;