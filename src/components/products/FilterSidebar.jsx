import { useGetCategoriesQuery } from "../../redux/api/productsApi";
import Loader from "../common/Loader";

export default function FilterSidebar({ onCategoryChange, selectedCategory }) {
  const { data: categories, isLoading } = useGetCategoriesQuery();

  if (isLoading) return <Loader />;

  return (
    <div>
      <button onClick={() => onCategoryChange("all")} style={{ fontWeight: selectedCategory === "all" ? "bold" : "normal" }}>
        Все
      </button>
      {categories.map((category) => (
        <button
          key={category}
          style={{
            fontWeight: selectedCategory === category ? "bold" : "normal",
          }}
          onClick={() => onCategoryChange(category)}>
          {category}
        </button>
      ))}
    </div>
  );
}
