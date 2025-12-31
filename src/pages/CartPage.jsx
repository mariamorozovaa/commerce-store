import { useSelector } from "react-redux";
import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <div>
      {cartItems.length === 0 && <p>Ваша корзина пуста</p>}
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <CartSummary items={cartItems} />
    </div>
  );
}
