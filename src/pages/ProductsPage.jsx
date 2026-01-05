import Loader from "../components/common/Loader";
import ErrorMessage from "../components/common/ErrorMessage";
import ProductGrid from "../components/products/ProductGrid";
import { useGetProductsQuery } from "../redux/api/productsApi";

export default function ProductsPage() {
  const { data: products, isLoading, error } = useGetProductsQuery();

  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage message="Ошибка при загрузке продуктов" />;

  return (
    <div>
      <ProductGrid products={products} />
    </div>
  );
}
