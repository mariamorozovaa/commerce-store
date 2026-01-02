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
  const isInWishlist = wishlistIds.includes(product.id);

  return (
    <div className="product-card">
      <button onClick={() => dispatch(toggleWishlist(product.id))} style={{ color: "red" }}>
        {isInWishlist ? "♥︎" : "♡"}
      </button>
      <img className="product-card__image" src={product.image} alt={product.title} />
      <h3 className="product-card__title">{product.title}</h3>
      <p className="product-card__price">{product.price}$</p>
      <p className="product-card__rating">⭐ {product.rating.rate}</p>
      <Link className="product-card__button" to={`/products/${product.id}`}>
        Подробнее
      </Link>
      <button onClick={handleAddToCart}>Добавить в корзину</button>
    </div>
  );
}
