import { Trash2, Heart } from "lucide-react";

function CartItem({ item, removeFromCart }) {
  const handleRemove = () => {
    removeFromCart(item);
  };

  return (
    <article className="flex w-full max-h-[200px] font-rubik border-gray-200 rounded-lg p-4 mt-4 gap-6">
      <figure className="w-[200px] h-[full] rounded-[24px] overflow-hidden shadow-lg flex items-center justify-center flex-shrink-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="flex flex-col justify-between w-full">
        <div className="flex justify-between items-start flex-wrap gap-20">
          <div className="max-w-[70%]">
            <h3 className="text-2xl font-semibold break-words">{item.name}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
            <div className="flex gap-4 mt-2 text-gray-dark text-sm">
              <p>Size {item.size}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          </div>

          <span className="text-blue-brand text-2xl font-semibold whitespace-nowrap">
            ${item.price}
          </span>
        </div>

        <div className="mt-4 flex gap-4">
          <button className="mr-4">
            <Heart className="cursor-pointer" />
          </button>
          <button onClick={handleRemove} className="cursor-pointer">
            <Trash2 />
          </button>
        </div>
      </div>
    </article>
  );
}

export default CartItem;
