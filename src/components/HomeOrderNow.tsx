import { Link } from "react-router-dom";

const HomeOrderNow = () => {
  return (
    <>
      <div className="flex justify-center w-full pt-1">
        <h1 className="text-white text-3xl">Home Page</h1>
      </div>
      <div className="min-h-[calc(100vh-69px)] sm:min-h-[calc(100vh-63px)] flex items-center justify-center px-1 z-10 w-full">
        <div className="flex flex-col gap-7 pb-3 sm:min-w-[448px] max-w-md items-center justify-center">
          <h1 className="text-3xl sm:text-4xl text-orange-600 text-center font-semibold tracking-wider">
            Your Favorite Food <br /> To Your Doorsteps
          </h1>
          <h1 className="text-xl sm:text-2xl text-white text-center w-fit mx-auto transition-all ease-in-out duration-500 mt-1">
            What are you waiting for?
          </h1>
          <div className="flex justify-center mt-2 flex-col gap-5 sm:gap-7 items-center">
            <div className="flex justify-center min-w-[100px] sm:min-w-[360px] !max-w-[200px] sm:max-w-[360px]">
              <Link
                to={"/order"}
                className="bg-orange-600 px-10 py-4 text-base lg:text-xl font-semibold text-white rounded-lg shadow-md"
                type="submit"
              >
                Order Now!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeOrderNow;
