import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img className="product-card__image" src={product.image} alt={product.title} />
      <h3 className="product-card__title">{product.title}</h3>
      <p className="product-card__price">{product.price}$</p>
      <p className="product-card__rating">⭐ {product.rating.rate}</p>
      <Link className="product-card__button" to={`/products/${product.id}`}>
        Подробнее
      </Link>
    </div>
  );
}
