import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductQuery } from "../redux/api/productsApi";
import { addToCart } from "../redux/slices/cartSlice";
import { toggleWishlist } from "../redux/slices/wishlistSlice";
import Loader from "../components/common/Loader";
import ErrorMessage from "../components/common/ErrorMessage";

export default function ProductDetailPage() {
  const { id } = useParams();
  const productId = Number(id);

  const { data: product, isLoading, error } = useGetProductQuery(productId);

  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const wishlistIds = useSelector((state) => state.wishlist.items);

  if (isLoading) return <Loader />;
  if (error || !product) return <ErrorMessage message="Ошибка при загрузке товара" />;

  const isInWishlist = wishlistIds.includes(product.id);

  return (
    <div className="product-detail">
      <img className="product-detail__image" src={product.image} alt={product.title} />
      <h3 className="product-detail__title">{product.title}</h3>
      <p className="product-detail__title">{product.description}</p>
      <p className="product-detail__price">{product.price}$</p>
      <p className="product-detail__price">{product.category}</p>
      <p className="product-detail__rating">
        ⭐ {product.rating.rate} ({product.rating.count} отзывов)
      </p>
      <button onClick={() => dispatch(toggleWishlist(product.id))} style={{ color: "red" }}>
        {isInWishlist ? "♥︎" : "♡"}
      </button>
      <button onClick={handleAddToCart}>Добавить в корзину</button>
      <Link className="product-detail__button" to={`/products`}>
        Назад
      </Link>
    </div>
  );
}
