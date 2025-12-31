import { useDispatch } from "react-redux";
import { updateQuantity, removeFromCart } from "../../redux/slices/cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();
  function handeAddToCart() {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  }
  function handeDeleteFromCart() {
    if (item.quantity > 1) dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    if (item.quantity === 1) dispatch(removeFromCart(item.id));
  }

  return (
    <div className="cart-item">
      <img className="cart-item__image" src={item.image} alt={item.title} />
      <h3 className="cart-item__title">{item.title}</h3>
      <p className="cart-item__price">{item.price}$</p>
      <p className="cart-item__price">{item.quantity} шт</p>
      <button onClick={handeAddToCart}>+</button>
      <button onClick={handeDeleteFromCart}>-</button>
      <p className="cart-item__price">{item.price * item.quantity}$</p>
      <button onClick={() => dispatch(removeFromCart(item.id))}>Удалить</button>
    </div>
  );
}
