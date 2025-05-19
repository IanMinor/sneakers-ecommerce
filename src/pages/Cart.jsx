import { useCartStore } from "../store/cartStore";
import { useAuthStore } from "../store/authStore";
import { useUserCart } from "../hooks/useUserCart";
import CartItem from "../components/CartItem";
import OrderSummary from "../components/OrderSummary";

function Cart() {
  const user = useAuthStore((state) => state.user);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const { cartItems, loading, error } = useUserCart(user);

  return (
    <main className="flex gap-8 w-[90%] mx-auto mt-8 justify-between">
      {loading ? (
        <p className="text-gray-500 flex justify-center items-center h-screen text-xl font-semibold w-full">
          Loading cart...
        </p>
      ) : error ? (
        <p className="text-red-500 flex justify-center items-center h-screen text-xl font-semibold w-full">
          Error: {error}
        </p>
      ) : cartItems.length === 0 ? (
        <p className="text-gray-500 flex justify-center items-center h-screen text-xl font-semibold w-full">
          Empty Cart, please add some items to your cart.
        </p>
      ) : (
        <>
          <div className="flex flex-col gap-4">
            {cartItems.map((item) => (
              <CartItem
                key={`${item.id}`}
                item={item}
                removeFromCart={() => removeFromCart(user.email, item)}
              />
            ))}
          </div>
          <OrderSummary />
        </>
      )}
    </main>
  );
}

export default Cart;
