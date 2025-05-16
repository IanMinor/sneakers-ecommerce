import { useCartStore } from "../store/cartStore";
import { useAuthStore } from "../store/authStore";
import { calculateTotalItems, calculateSubtotal } from "../utils/items";

const useCartCalculations = () => {
  const user = useAuthStore((state) => state.user);
  const carts = useCartStore((state) => state.carts);

  const cartItems = user ? carts[user.email] || [] : [];

  const totalItems = calculateTotalItems(cartItems);
  const subtotal = calculateSubtotal(cartItems);

  return { totalItems, subtotal };
};

export default useCartCalculations;
