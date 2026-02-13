import { Link } from "react-router-dom";
import { addToCart } from "../../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "../../redux/slices/wishlistSlice";
import "../../styles/ProductCard.css";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };
  const wishlistIds = useSelector((state) => state.wishlist.items);
  const cartItems = useSelector((state) => state.cart.items);
  const isInWishlist = wishlistIds.includes(product.id);
  const isInCart = cartItems.some((item) => item.id === product.id);

  return (
    <div className="product-card">
      <img className="product-image" src={product.image} alt={product.title} />
      <div className="product-content">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">{product.price}$</p>
        <p className="product-rating">⭐ {product.rating.rate}</p>
      </div>

      <div className="product-actions">
        <Link to={`/products/${product.id}`}>Подробнее</Link>
        <button onClick={() => dispatch(toggleWishlist(product.id))} style={{ color: "red" }}>
          {isInWishlist ? "♥︎" : "♡"}
        </button>
        <button onClick={handleAddToCart} disabled={isInCart}>
          {isInCart ? "В корзине" : "Добавить в корзину"}
        </button>
      </div>
    </div>
  );
}
