import logo from "../assets/logo.svg";
import Button from "./Button";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const links = ["About us", "Services", "Use Cases", "Pricing", "Blog"];

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  function handleIsActive() {
    setIsActive((prev) => !prev);
  }
  return (
    <ul className=" my-4 md:my-8 sticky top-0 z-50 backdrop-blur-2xl">
      <div
        className={`container md:flex md:justify-between md:items-center md:my-5 `}
      >
        <div className=" flex justify-between items-center">
          <img className="w-[50%] md:w-full" src={logo} alt="Logo" />
          <button onClick={handleIsActive} className="flex md:hidden text-3xl">
            {isActive ? <IoClose /> : <GiHamburgerMenu />}
          </button>
        </div>

        <div
          className={`md:flex md:justify-between lg:gap-10 md:gap-2 items-center ${isActive ? "flex justify-around h-[87vh] backdrop-blur-xl flex-col" : "hidden"}`}
        >
          {links.map((item) => {
            return (
              <a
                href={item}
                key={item}
                className={`hover:text-gray-600 lg:text-base md:text-xs sm:text-base`}
              >
                {item}
              </a>
            );
          })}
        </div>
        <Button
          className={`hidden md:flex lg:text-base md:text-xs sm:text-base`}
        >
          Request a quote
        </Button>
      </div>
    </ul>
  );
};

export default Navbar;
