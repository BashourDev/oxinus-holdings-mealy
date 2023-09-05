import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const MealCard = ({ id, name, thumb, addToCart, isInCart, removeFromCart }) => {
  const [count, setCount] = useState(isInCart(id));

  const reloadCount = (action) => {
    if (action == "add") {
      setCount((old) => old + 1);
    } else {
      setCount((old) => old - 1);
    }
    console.log("count", count);
  };
  return (
    <div className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center">
      <div className="bg-white rounded-lg mt-5">
        <img src={thumb} className="h-40 rounded-md" alt="" />
      </div>
      <div className="bg-white shadow-lg rounded-lg -mt-4 w-64">
        <div className="py-5 px-5">
          <span className="font-bold text-gray-800 text-lg">{name}</span>
          <div className="flex items-center justify-between">
            {count ? (
              <>
                <div className="flex gap-1">
                  <button
                    onClick={() => {
                      reloadCount("subtract");
                      removeFromCart({ id, name, thumb });
                    }}
                  >
                    <FaMinus className="text-orange-600 text-lg" />
                  </button>
                  <span>{count}</span>
                  <button
                    onClick={() => {
                      reloadCount("add");
                      addToCart({ id, name, thumb });
                    }}
                  >
                    <FaPlus className="text-orange-600 text-lg" />
                  </button>
                </div>
              </>
            ) : (
              <button
                onClick={() => {
                  reloadCount("add");
                  addToCart(id);
                }}
                className="bg-orange-600 px-2 py-2 text-base lg:text-sm font-semibold text-white rounded-lg shadow-md mt-1"
              >
                Add To Cart
              </button>
            )}
            <div className="text-2xl text-red-600 font-bold">$ 8.00</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
