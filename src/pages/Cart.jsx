import { useCartStore } from "../store/cartStore";
import CartItem from "../components/CartItem";
import OrderSummary from "../components/OrderSummary";

function Cart() {
  const cartItems = useCartStore((state) => state.cartItems);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  return (
    <main className="flex gap-8 w-[90%] mx-auto mt-8 justify-between">
      {cartItems.length === 0 ? (
        <p className="text-gray-500 flex justify-center items-center h-screen text-xl font-semibold w-full">
          Empty Cart, please add some items to your cart.
        </p>
      ) : (
        <>
          <div className="flex flex-col  gap-4">
            {cartItems.map((item) => (
              <CartItem
                key={`${item.id}-${item.color}-${item.size}`}
                item={item}
                removeFromCart={removeFromCart} // Pass the remove function to CartItem
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
