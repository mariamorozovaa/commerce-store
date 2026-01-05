import { useSelector } from "react-redux";
import Loader from "../components/common/Loader";
import ErrorMessage from "../components/common/ErrorMessage";
import ProductGrid from "../components/products/ProductGrid";
import { useGetProductsQuery } from "../redux/api/productsApi";

export default function WishlistPage() {
  const { data: products = [], isLoading, error } = useGetProductsQuery();

  const wishlistIds = useSelector((state) => state.wishlist.items);
  const wishlistProducts = products.filter((p) => wishlistIds.includes(p.id));

  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage message="Ошибка при загрузке избранного" />;

  return (
    <div>
      {!isLoading && !error && wishlistProducts.length === 0 && <p>У вас нет избранных товаров</p>}
      <ProductGrid products={wishlistProducts} />
    </div>
  );
}
