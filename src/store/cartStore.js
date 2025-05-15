import { create } from "zustand";

export const useCartStore = create((set) => ({
  cartItems: [],
  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cartItems.find(
        (i) =>
          i.id === item.id && i.color === item.color && i.size === item.size
      );
      if (existingItem) {
        return {
          cartItems: state.cartItems.map((i) =>
            i.id === item.id && i.color === item.color && i.size === item.size
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        };
      }
      return { cartItems: [...state.cartItems, item] };
    }),
  removeFromCart: (itemToRemove) =>
    set((state) => ({
      cartItems: state.cartItems.filter(
        (i) =>
          i.id !== itemToRemove.id ||
          i.color !== itemToRemove.color ||
          i.size !== itemToRemove.size
      ),
    })),
  clearCart: () => set({ cartItems: [] }),
}));
