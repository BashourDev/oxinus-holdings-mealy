import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <>
      <div className="flex justify-center w-full pt-1">
        <h1 className="text-white text-3xl">About Me</h1>
      </div>
      <div className="min-h-[calc(100vh-69px)] sm:min-h-[calc(100vh-63px)] flex items-center justify-center px-1 z-10 w-full">
        <div className="flex flex-col gap-7 pb-3 sm:min-w-[448px] max-w-md items-center justify-center">
          <h1 className="text-3xl sm:text-4xl text-orange-600 text-center font-semibold tracking-wider">
            Mealy
          </h1>

          <div className="flex justify-center mt-2 flex-col gap-5 sm:gap-7 items-center">
            <div className="flex justify-center min-w-[100px] sm:min-w-[360px] !max-w-[200px] sm:max-w-[360px]">
              <p className="text-xl sm:text-2xl text-white text-center w-fit mx-auto transition-all ease-in-out duration-500 mt-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                impedit id in sapiente incidunt necessitatibus tempora culpa cum
                expedita soluta, vitae maiores autem dignissimos similique
                corporis sed est unde magni?
              </p>
            </div>
          </div>
          <h1 className="text-xl sm:text-2xl text-orange-600 text-center font-semibold tracking-wider mt-5">
            Connect With Us
          </h1>
          <ul className="flex items-center gap-5">
            <li>
              <Link to={"#"}>
                <FaFacebook className="text-blue-500 text-4xl" />
              </Link>
            </li>
            <li>
              <Link to={"#"}>
                <FaInstagram className="text-orange-500 text-4xl" />
              </Link>
            </li>
            <li>
              <Link to={"https://github.com/BashourDev"}>
                <FaGithub className="text-gray-50 text-4xl" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
