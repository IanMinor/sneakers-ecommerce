import { useEffect, useState } from "react";
import { useFilterStore } from "../store/useFilterStore";

export function useFilteredProducts() {
  const { filters } = useFilterStore();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const buildQuery = () => {
      const params = new URLSearchParams();

      if (filters.minPrice > 0) {
        params.append("minPrice", filters.minPrice);
      }
      ["gender", "size", "color", "category"].forEach((key) => {
        filters[key].forEach((val) => {
          params.append(key, val);
        });
      });

      return params.toString();
    };

    const fetchFiltered = async () => {
      try {
        setLoading(true);
        const query = buildQuery();
        const res = await fetch(`http://localhost:3001/api/products?${query}`);
        if (!res.ok) throw new Error("No se pudieron cargar los productos");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFiltered();
  }, [filters]);

  return { products, loading, error };
}
