import { useState, useEffect } from "react";

export function useUserCart(user) {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCart = async () => {
      if (!user) return;
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `http://localhost:3001/api/cart/${user.id_usuario}`
        );
        if (!res.ok) throw new Error("Error fetching cart");
        const data = await res.json();
        setCartItems(data);
      } catch (err) {
        setError(err.message);
        setCartItems([]);
      } finally {
        setLoading(false);
      }
    };
    fetchCart();
  }, [user]);

  return { cartItems, setCartItems, loading, error };
}
