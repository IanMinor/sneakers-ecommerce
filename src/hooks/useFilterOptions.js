import { useEffect, useState } from "react";

export function useFilterOptions() {
  const [options, setOptions] = useState({
    categories: [],
    colors: [],
    sizes: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const res = await fetch(
          "http://localhost:3001/api/products/filters/options"
        );
        if (!res.ok) throw new Error("No se pudieron obtener los filtros");
        const data = await res.json();
        setOptions(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOptions();
  }, []);

  return { options, loading, error };
}
