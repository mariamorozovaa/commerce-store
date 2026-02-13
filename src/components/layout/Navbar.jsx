import { Link } from "react-router-dom";
import "../../styles/Navbar.css";
import { useSelector } from "react-redux";

export default function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <nav className="navbar">
      <div className="navbar-logo">Store</div>
      <div className="navbar-menu">
        <Link to="/">Главная</Link>
        <Link to="/products">Товары</Link>

        <Link to="/wishlist">Избранное</Link>
        <Link to="/orders">Заказы</Link>
      </div>
      <div className="navbar-cart">
        <Link to="/cart">
          🛒
          <div className="cart-count">{cartItems.reduce((sum, item) => (sum += item.quantity), 0)}</div>
        </Link>
      </div>
    </nav>
  );
}
