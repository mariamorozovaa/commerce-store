import { Link } from "react-router-dom";

export default function CartSummary({ items }) {
  const total = items.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);
  return (
    <div className="cart-summary">
      <p>Сумма: {total.toFixed(2)}$</p>
      <Link to="/checkout">Проверить</Link>
    </div>
  );
}
