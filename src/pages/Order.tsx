import { useCallback, useContext, useEffect, useState } from "react";
import AppSelect from "../components/AppSelect";
import api from "../api/api";
import MealCard from "../components/MealCard";
import AppSearchInput from "../components/AppSearchInput";
import { MdSearch } from "react-icons/md";
import CartContext from "../contexts/cartContext";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const debounce = (func, wait) => {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

const Order = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [meals, setMeals] = useState([]);
  let cartContext = useContext(CartContext);

  const getCategories = async () => {
    const res = await api.get("categories.php");
    console.log(res.data);
    setCategories(res.data.categories);
    setSelectedCategory(res.data.categories[0]);
  };

  const getMealsByCategory = async () => {
    const res = await api.get(`filter.php?c=${selectedCategory?.strCategory}`);
    console.log(res.data.meals);

    setMeals(res.data.meals);
  };

  const getMealsByName = async (inputVal) => {
    const res = await api.get(`search.php?s=${inputVal}`);
    console.log(res.data.meals);

    setMeals(res.data.meals);
  };

  const handleSearch = useCallback(
    debounce((inputVal) => getMealsByName(inputVal), 500),
    []
  );

  const handleAddToCart = (item) => {
    let found = false;
    let temp = cartContext.cart;

    temp?.map((value) => {
      if (item.id === value.id) {
        found = true;
        value.quantity = value?.quantity + 1;
      }

      return value;
    });

    if (!found) {
      if (temp?.length > 0) {
        temp = [{ ...item, quantity: 1 }, ...temp];
      } else {
        temp = [{ ...item, quantity: 1 }];
      }
    }

    cartContext.setCart(temp);
  };

  const handleRemoveFromCart = (item) => {
    let temp = cartContext.cart;
    let removeIndex = -1;

    temp.map((value, i) => {
      if (item.id === value.id) {
        if (value.quantity > 1) {
          value.quantity = value?.quantity - 1;
        } else {
          removeIndex = i;
        }
      }
      return value;
    });

    if (removeIndex > -1) {
      temp.pop(removeIndex);
    }

    cartContext.setCart(temp);

    console.log("temp", temp);
  };

  const handleCheckIfInCart = (id) => {
    for (let i = 0; i < cartContext.cart?.length; i++) {
      if (id === cartContext.cart[i].id) {
        return cartContext.cart[i].quantity;
      }
    }
    return 0;
  };

  useEffect(() => {
    getCategories();
    console.log("cart", cartContext.cart);
  }, []);

  useEffect(() => {
    getMealsByCategory();
  }, [selectedCategory]);

  return (
    <>
      <div className="flex justify-center w-full pt-1">
        <h1 className="text-3xl">Order Page</h1>
      </div>
      <div className="min-h-[calc(100vh-69px)] sm:min-h-[calc(100vh-63px)] flex justify-center px-1 z-10 w-full pt-20">
        <div className="flex flex-col gap-7 pb-3 sm:min-w-[448px]  items-center">
          <div className="bg-gray-100 border-2 border-gray-400 rounded-md py-5 w-full px-5 flex gap-5 justify-between">
            <div className="flex gap-5">
              <AppSelect
                selected={selectedCategory}
                setSelected={setSelectedCategory}
                options={categories}
              />
              <AppSearchInput
                placeholder={"search meals..."}
                onChange={handleSearch}
                Icon={MdSearch}
              />
            </div>
            <Link to={"/checkout"}>
              <FaShoppingCart className="text-3xl text-orange-600" />
            </Link>
          </div>
          <div className="flex justify-center mt-2 flex-col gap-5 sm:gap-7 items-center">
            <div className="grid grid-cols-4 gap-5">
              {meals?.map((meal) => (
                <MealCard
                  key={meal.idMeal}
                  id={meal.idMeal}
                  name={meal.strMeal}
                  thumb={meal.strMealThumb}
                  addToCart={handleAddToCart}
                  isInCart={handleCheckIfInCart}
                  removeFromCart={handleRemoveFromCart}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
