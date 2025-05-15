import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCartStore } from "../store/cartStore";
import { useState } from "react";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const addToCart = useCartStore((state) => state.addToCart);

  if (!product) return <p>Product not found</p>;

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
      color: product.color,
      description: product.description,
      quantity: 1,
    });
  };

  const [selectedSize, setSelectedSize] = useState(null);

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
          <button
            disabled={!selectedSize}
            onClick={handleAddToCart}
            className="w-full bg-black text-white py-2 rounded-[8px] disabled:opacity-50 cursor-pointer"
          >
            ADD TO CART
          </button>
          <button className="w-full bg-blue-600 text-white py-2 mt-2 rounded-[8px] cursor-pointer">
            BUY IT NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
