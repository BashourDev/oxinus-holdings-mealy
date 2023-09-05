import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import { CiMenuBurger } from "react-icons/ci";
import ThemeWrapper from "./components/ThemeWrapper";
import { Route, Routes, useLocation } from "react-router-dom";
import HomeOrderNow from "./components/HomeOrderNow";
import AboutMe from "./components/AboutMe";
import CartContext from "./contexts/cartContext";
import Order from "./pages/Order";
import Checkout from "./pages/Checkout";
import MyOrders from "./pages/MyOrders";

function App() {
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const location = useLocation();
  const [burgerColor, setBurgerColor] = useState("text-white");

  useEffect(() => {
    if (
      (location.pathname === "/" || location.pathname === "/about-me") &&
      !open
    ) {
      setBurgerColor("text-white");
    } else {
      setBurgerColor("text-gray-900");
    }
  }, [location, open]);

  return (
    <>
      <CartContext.Provider value={{ cart: cart, setCart: setCart }}>
        <button
          onClick={() => setOpen(true)}
          className="absolute left-5 top-5 z-50"
        >
          <CiMenuBurger className={`text-4xl font-bold ${burgerColor}`} />
        </button>
        <Routes>
          <Route path="/" Component={ThemeWrapper}>
            <Route path="/about-me" Component={AboutMe} />
            <Route path="/" Component={HomeOrderNow} />
          </Route>
          <Route path="/order" Component={Order} />
          <Route path="/checkout" Component={Checkout} />
          <Route path="/my-orders" Component={MyOrders} />
        </Routes>
        <NavBar open={open} setOpen={setOpen} />
      </CartContext.Provider>
    </>
  );
}

export default App;
