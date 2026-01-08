import Loader from "../components/common/Loader";
import ErrorMessage from "../components/common/ErrorMessage";
import ProductGrid from "../components/products/ProductGrid";
import { useGetProductsQuery, useGetProductsByCategoryQuery } from "../redux/api/productsApi";
import { useState } from "react";
import FilterSidebar from "../components/products/FilterSidebar";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const {
    data: allProducts,
    isLoading: isLoadingAll,
    error: errorAll,
  } = useGetProductsQuery(undefined, {
    skip: selectedCategory !== "all",
  });

  const {
    data: categoryProducts,
    isLoading: isLoadingCategory,
    error: errorCategory,
  } = useGetProductsByCategoryQuery(selectedCategory, {
    skip: selectedCategory === "all",
  });

  const products = selectedCategory === "all" ? allProducts : categoryProducts;
  const isLoading = isLoadingAll || isLoadingCategory;
  const error = errorAll || errorCategory;

  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage message="Ошибка при загрузке продуктов" />;

  return (
    <div>
      <FilterSidebar onCategoryChange={setSelectedCategory} selectedCategory={selectedCategory} />
      <ProductGrid products={products} />
    </div>
  );
}
