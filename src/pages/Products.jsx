import ProductCard from "../components/ProductCard";
import ProductFilters from "../components/ProductFilters";
import { useFilters } from "../hooks/useFilters";

function Products() {
  const { filteredProducts } = useFilters();

  return (
    <div className="flex gap-5 justify-center w-[90%] mx-auto">
      <aside className="max-w-[300px] w-full rounded-[28px] p-6">
        <ProductFilters />
      </aside>

      <section className="w-full">
        {filteredProducts.length === 0 ? (
          <p className="text-gray-500 flex justify-center items-center h-screen text-xl font-semibold">
            No products match your filters.
          </p>
        ) : (
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-items-center mt-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
export default Products;
