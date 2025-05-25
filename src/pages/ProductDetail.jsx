import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { useCartStore } from "../store/cartStore";
import { useAuthStore } from "../store/authStore";
import { useState } from "react";
import AddToCartModal from "../components/AddToCartModal";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const addToCart = useCartStore((state) => state.addToCart);
  const { user } = useAuthStore();
  const navigate = useNavigate();

  const [selectedSize, setSelectedSize] = useState(null);
  const [showModal, setShowModal] = useState(false);

  if (!product) return <p>Product not found</p>;

  const getCartItem = () => ({
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.image,
    size: selectedSize,
    color: product.color,
    description: product.description,
    quantity: 1,
  });

  const handleAddToCart = async () => {
    if (!user) {
      return navigate("/login");
    }

    try {
      const res = await fetch("http://localhost:3001/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id_usuario: user.id_usuario,
          id_producto: product.id,
          cantidad: 1,
        }),
      });

      const result = await res.json();
      if (res.ok) {
        setShowModal(true);
        setTimeout(() => {
          setShowModal(false);
        }, 2000);
      } else {
        // Mostrar error
        console.log(result);
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const handleBuyNow = () => {
    if (!selectedSize) return;
    addToCart(user.email, getCartItem());
    navigate("/checkout");
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start md:justify-center gap-8 p-4 mt-7 font-rubik">
      <div className="w-full max-w-[400px] h-auto flex items-center justify-center overflow-hidden shadow-lg">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full bg-cover"
        />
      </div>
      <div className="info-section">
        <span className="text-xs uppercase bg-blue-100 text-blue-600 px-2 py-1 rounded">
          New Release
        </span>
        <h1 className="text-2xl font-bold mt-2">{product.name}</h1>
        <p className="text-xl font-semibold text-blue-500">${product.price}</p>

        {/* Color (solo visual) */}
        <div className="mt-4">
          <span className="text-sm font-medium">Color</span>
          <div
            className="w-6 h-6 rounded-full border mt-1"
            style={{ backgroundColor: product.color }}
          />
        </div>

        {/* Sizes */}
        <div className="mt-4">
          <span className="text-sm font-medium">Size</span>
          <div className="flex flex-wrap gap-2 mt-2">
            {product.size.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`w-10 h-10 rounded border cursor-pointer  ${
                  selectedSize === size
                    ? "bg-black text-white "
                    : "bg-white text-black hover:border-black hover:bg-gray-100"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Add to cart */}
        <div className="mt-6">
          <div>
            <button
              disabled={!selectedSize}
              onClick={handleAddToCart}
              className="w-full bg-black text-white py-2 rounded-[8px] disabled:opacity-50 cursor-pointer"
            >
              ADD TO CART
            </button>
            <AddToCartModal isOpen={showModal} />
          </div>
          <button
            disabled={!selectedSize}
            onClick={handleBuyNow}
            className="w-full bg-blue-600 text-white py-2 mt-2 rounded-[8px] disabled:opacity-50 cursor-pointer"
          >
            BUY IT NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
