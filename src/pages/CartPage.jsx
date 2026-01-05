import { useSelector } from "react-redux";
import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart.items);

  if (cartItems.length === 0) return <p>Ваша корзина пуста</p>;

  return (
    <div>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <CartSummary items={cartItems} />
    </div>
  );
}
