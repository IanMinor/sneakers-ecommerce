import { useNavigate } from "react-router-dom";
import OrderDetails from "../components/OrderDetails";
import { useCartStore } from "../store/cartStore";

function OrderConfirmation() {
  const { clearCart } = useCartStore();
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    clearCart();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-10">Thank you for your purchase!</h1>

      <OrderDetails />

      <button
        onClick={handleContinueShopping}
        className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-semibold transition"
      >
        Continue Shopping
      </button>
    </div>
  );
}

export default OrderConfirmation;
