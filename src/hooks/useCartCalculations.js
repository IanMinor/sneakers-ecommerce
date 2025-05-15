import { useCartStore } from "../store/cartStore";
import { calculateTotalItems, calculateSubtotal } from "../utils/items";

const useCartCalculations = () => {
  const cartItems = useCartStore((state) => state.cartItems);

  const totalItems = calculateTotalItems(cartItems);
  const subtotal = calculateSubtotal(cartItems);

  return { totalItems, subtotal };
};

export default useCartCalculations;
