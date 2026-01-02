import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Loader from "../components/common/Loader";
import ErrorMessage from "../components/common/ErrorMessage";
import ProductGrid from "../components/products/ProductGrid";

export default function WishlistPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchProducts() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Ошибка загрузки товаров");
      }
      const data = await response.json();
      setProducts(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const wishlistIds = useSelector((state) => state.wishlist.items);
  const wishlistProducts = products.filter((p) => wishlistIds.includes(p.id));

  return (
    <div>
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {!loading && !error && wishlistProducts.length === 0 && <p>У вас нет избранных товаров</p>}
      <ProductGrid products={wishlistProducts} />
    </div>
  );
}
