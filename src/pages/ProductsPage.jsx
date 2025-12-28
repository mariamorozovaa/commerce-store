import { useState, useEffect } from "react";
import Loader from "../components/common/Loader";
import ErrorMessage from "../components/common/ErrorMessage";
import ProductGrid from "../components/products/ProductGrid";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

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

  return (
    <div>
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <ProductGrid products={products} />
    </div>
  );
}
