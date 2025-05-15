import { useFilterStore } from "../store/useFilterStore";

function ProductFilters() {
  const { filters, updateFilter, toggleFilterValue } = useFilterStore();

  const handleChangePrice = (e) => {
    updateFilter("minPrice", Number(e.target.value));
  };

  const handleChangeGender = (e) => {
    toggleFilterValue("gender", e.target.value.toLowerCase());
  };

  // const handleChangeSize = (e) => {
  //   toggleFilterValue("size", e.target.value);
  // };

  // const handleChangeColor = (e) => {
  //   toggleFilterValue("color", e.target.value);
  // };

  const handleChangeCategory = (e) => {
    toggleFilterValue("category", e.target.value);
  };

  return (
    <div className="p-4 rounded-2xl font-rubik">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>
      {/* Refine By */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">REFINE BY</h3>
        <div className="flex gap-2">
          <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">
            Mens
          </span>
          <span className="bg-gray-300 text-black px-2 py-1 rounded-full text-sm">
            Casual
          </span>
        </div>
      </div>
      {/* Size */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">SIZE</h3>
        <div className="grid grid-cols-4 gap-2">
          {[38, 39, 40, 41, 42, 43, 44, 45, 46, 47].map((size) => {
            const isSelected = filters.size.includes(String(size));
            return (
              <button
                key={size}
                // className="border rounded-lg px-2 py-1 hover:bg-black hover:text-white transition duration-200 ease-in-out cursor-pointer"
                value={size}
                onClick={() => toggleFilterValue("size", String(size))}
                className={`border rounded-lg px-2 py-1 transition duration-200 cursor-pointer
                  ${isSelected ? "bg-black text-white" : "hover:bg-gray-200"}`}
              >
                {size}
              </button>
            );
          })}
        </div>
      </div>

      {/* Color */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">COLOR</h3>
        <div className="grid grid-cols-5 gap-2">
          {[
            "blue",
            "yellow",
            "green",
            "gray",
            "orange",
            "lightgray",
            "darkgray",
            "brown",
            "black",
          ].map((color, idx) => {
            const isSelected = filters.color.includes(color);

            return (
              <button
                key={idx}
                style={{ backgroundColor: color }}
                onClick={(e) => toggleFilterValue("color", color)}
                className={`w-7 h-7 rounded-[8px] border transition duration-200 ${
                  isSelected ? "ring-1 ring-black scale-105" : "ring-0"
                }`}
              ></button>
            );
          })}
        </div>
      </div>
      {/* Categorías */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">CATEGORY</h3>
        {[
          "Casual shoes",
          "Runners",
          "Hiking",
          "Sneaker",
          "Basketball",
          "Golf",
          "Outdoor",
        ].map((category) => (
          <div key={category} className="flex items-center gap-2">
            <input
              type="checkbox"
              id={category}
              value={category}
              onChange={handleChangeCategory}
            />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
      </div>

      {/* Gender */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">GENDER</h3>
        {["Men", "Women"].map((gender) => (
          <div key={gender} className="flex items-center gap-2">
            <input
              type="checkbox"
              id={gender}
              value={gender}
              onChange={handleChangeGender}
            />
            <label htmlFor={gender}>{gender}</label>
          </div>
        ))}
      </div>
      {/* Price Slider */}
      <div>
        <h3 className="font-medium mb-2">PRICE</h3>
        <input
          type="range"
          min="0"
          max="300"
          step="10"
          className="w-full"
          onChange={handleChangePrice}
          value={filters.minPrice}
        />
        <div className="flex justify-between text-sm text-gray-600">
          <span>${filters.minPrice}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductFilters;
