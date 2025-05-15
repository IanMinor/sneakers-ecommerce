import useCartCalculations from "../hooks/useCartCalculations";
import { useCartStore } from "../store/cartStore";
import CheckoutItem from "./CheckoutItem";

function OrderDetails() {
  const { totalItems, subtotal } = useCartCalculations();
  const cartItems = useCartStore((state) => state.cartItems);

  return (
    <div>
      <article className="font-rubik flex flex-col gap-4 bg-white rounded-lg shadow-lg p-4 h-max w-full">
        <h2 className="text-3xl font-semibold">Order Summary</h2>
        <div className="flex justify-between items-center">
          <p>{totalItems} Items</p>
          <p>{subtotal}</p>
        </div>
        <div className="flex justify-between items-center text-2xl font-semibold text-gray-dark">
          <h3 className="">Total</h3>
          <p className="opacity-80">${subtotal}</p>
        </div>
      </article>

      <article className="border-gray-200 mt-5 bg-white shadow-lg p-4 rounded-lg">
        <h3 className="text-2xl font-semibold">Order Details</h3>
        {cartItems.map((item) => (
          <CheckoutItem
            key={`${item.id}-${item.color}-${item.size}`}
            item={item}
          />
        ))}
      </article>
    </div>
  );
}

export default OrderDetails;
