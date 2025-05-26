import { useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductFilters from "../components/ProductFilters";
import { useFilters } from "../hooks/useFilters";
import { useProducts } from "../hooks/useProducts";

function Products() {
  const { products, loading, error } = useProducts();
  const { filteredProducts } = useFilters();
  const [showFilters, setShowFilters] = useState(false);

  if (loading) return <p className="text-center">Cargando productos...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="flex gap-5 justify-center w-[90%] mx-auto relative">
      {/* Botón para abrir filtros en móvil */}
      <button
        type="button"
        className="md:hidden fixed bottom-6 right-6 z-50 bg-blue-brand text-white px-5 py-3 rounded-full shadow-lg font-semibold flex items-center gap-2"
        onClick={() => setShowFilters(true)}
        aria-label="Mostrar filtros"
      >
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            strokeWidth="2"
            d="M3 6h18M6 12h12M10 18h4"
          />
        </svg>
        Filtros
      </button>

      {/* Aside de filtros: visible en desktop, modal en móvil */}
      <aside className="max-w-[300px] w-full rounded-[28px] p-6 hidden md:block">
        <ProductFilters />
      </aside>

      {/* Modal de filtros en móvil */}
      {showFilters && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          onClick={() => setShowFilters(false)}
        >
          <div
            className="bg-white rounded-2xl p-6 w-[90vw] max-w-xs max-h-[90vh] relative animate-fade-in flex flex-col overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="sticky top-0 right-0 self-end z-10 text-gray-500 hover:text-black text-2xl font-bold bg-white rounded-full p-1"
              onClick={() => setShowFilters(false)}
              aria-label="Cerrar filtros"
              style={{ marginBottom: "8px" }}
            >
              &times;
            </button>
            <ProductFilters
              onApply={() => setShowFilters(false)}
              onReset={() => {}}
            />
          </div>
        </div>
      )}

      <section className="w-full">
        {filteredProducts.length === 0 ? (
          <p className="text-gray-500 flex justify-center items-center h-screen text-xl font-semibold">
            No products match your filters.
          </p>
        ) : (
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-items-center mt-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
export default Products;
