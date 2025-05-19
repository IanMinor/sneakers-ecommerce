import { useMemo } from "react";

const useCartCalculations = (cartItems = []) => {
  const totalItems = useMemo(
    () => cartItems.reduce((acc, item) => acc + (item.cantidad || 0), 0),
    [cartItems]
  );
  const subtotal = useMemo(
    () =>
      cartItems.reduce(
        (acc, item) => acc + (item.precio || 0) * (item.cantidad || 0),
        0
      ),
    [cartItems]
  );
  return { totalItems, subtotal };
};

export default useCartCalculations;
