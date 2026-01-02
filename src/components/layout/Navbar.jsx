import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Главная</Link>
      <Link to="/products">Товары</Link>
      <Link to="/cart">Корзина</Link>
      <Link to="/wishlist">Избранное</Link>
      <Link to="/orders">Заказы</Link>
    </nav>
  );
}
