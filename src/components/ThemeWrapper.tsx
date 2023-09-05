import { Outlet } from "react-router-dom";

const ThemeWrapper = () => {
  return (
    <div className="min-h-screen relative flex flex-col bg-[url('https://www.tailwindtap.com/assets/components/hero/food-delivery/banner.jpg')]  bg-no-repeat w-full bg-cover bg-left-bottom sm:bg-center">
      <div className="bg-black/60 h-full w-full absolute"></div>

      <div className="flex flex-col justify-between sm:justify-end gap-3.5 items-center pt-5 sm:pt-5 z-30">
        <Outlet />
      </div>
    </div>
  );
};

export default ThemeWrapper;
