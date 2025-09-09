import { useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import HeaderLogo from "../../assets/headerLogo.png";
import { BsSearch } from "react-icons/bs";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag, HiMiniBars3CenterLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { RiCloseLargeLine } from "react-icons/ri";
import { ImCross } from "react-icons/im";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);

  return (
    <>
      <div className="w-full py-5">
        <Container>
          <Flex className={"justify-between items-center"}>
            <div className="">
              <Image imgSrc={HeaderLogo} imgAlt={"Header Logo"} />
            </div>
            <div className="m-auto">
              <ul className="flex items-center gap-x-10">
                <Link to={"/"}>
                  <li className="relative list-none px-2 py-2 text-sm  text-black  font-medium cursor-pointer group  hover:text-black  hover:cursor-pointer hover:translate-x-0 transition-all ease-in-out ">
                    HOME
                    <span
                      className="absolute left-0 bottom-0  h-0.5 bg-black transform  
                      w-0 group-hover:w-full group-hover:left-0 group-hover:translate-x-0 
                      transition-all duration-300 ease-in-out"
                    ></span>
                  </li>
                </Link>
                <Link to={"/shop"}>
                  <li className="relative list-none px-2 py-2 text-sm  text-black  font-medium cursor-pointer group  hover:text-black  hover:cursor-pointer hover:translate-x-0 transition-all ease-in-out ">
                    SHOP
                    <span
                      className="absolute left-0 bottom-0  h-0.5 bg-black transform  
                      w-0 group-hover:w-full group-hover:left-0 group-hover:translate-x-0 
                      transition-all duration-300 ease-in-out"
                    ></span>
                  </li>
                </Link>
                <li className="relative list-none px-2 py-2 text-sm  text-black  font-medium cursor-pointer group  hover:text-black  hover:cursor-pointer hover:translate-x-0 transition-all ease-in-out ">
                  BLOG
                  <span
                    className="absolute left-0 bottom-0  h-0.5 bg-black transform  
                      w-0 group-hover:w-full group-hover:left-0 group-hover:translate-x-0 
                      transition-all duration-300 ease-in-out"
                  ></span>
                </li>
                <li className="relative list-none px-2 py-2 text-sm  text-black  font-medium cursor-pointer group  hover:text-black  hover:cursor-pointer hover:translate-x-0 transition-all ease-in-out ">
                  ABOUT
                  <span
                    className="absolute left-0 bottom-0  h-0.5 bg-black transform  
                      w-0 group-hover:w-full group-hover:left-0 group-hover:translate-x-0 
                      transition-all duration-300 ease-in-out"
                  ></span>
                </li>
                <li className="relative list-none px-2 py-2 text-sm  text-black  font-medium cursor-pointer group  hover:text-black  hover:cursor-pointer hover:translate-x-0 transition-all ease-in-out ">
                  CONTACT
                  <span
                    className="absolute left-0 bottom-0  h-0.5 bg-black transform  
                      w-0 group-hover:w-full group-hover:left-0 group-hover:translate-x-0 
                      transition-all duration-300 ease-in-out"
                  ></span>
                </li>
                <li className="relative list-none px-2 py-2 text-sm  text-black  font-medium cursor-pointer group  hover:text-black  hover:cursor-pointer hover:translate-x-0 transition-all ease-in-out ">
                  PAGES
                  <span
                    className="absolute left-0 bottom-0  h-0.5 bg-black transform  
                      w-0 group-hover:w-full group-hover:left-0 group-hover:translate-x-0 
                      transition-all duration-300 ease-in-out"
                  ></span>
                </li>
              </ul>
            </div>
            <div className="">
              <Flex className="justify-center items-center *:mr-3 gap-x-5">
                {/* Search part Start  */}
                <div className="relative flex justify-center items-center ">
                  <input
                    className=" py-1.5 px-5 outline-1 outline-gray-200 bg-[#F5F5F5]"
                    type="text"
                    size={"23"}
                    placeholder="What are you looking for?"
                  />
                  <BsSearch className="absolute right-3 text-xl " />
                </div>
                {/* Search part End  */}
                <FaRegHeart className=" text-xl hover:cursor-pointer" />
                <FaRegUser
                  onClick={() => setIsUserOpen(true)}
                  className=" text-xl hover:cursor-pointer"
                />
                <HiOutlineShoppingBag
                  onClick={() => setIsCartOpen(true)}
                  className=" text-2xl  hover:cursor-pointer"
                />
                <HiMiniBars3CenterLeft
                  onClick={() => setIsMenuOpen(true)}
                  className=" text-2xl  hover:cursor-pointer"
                />
              </Flex>
            </div>
          </Flex>
        </Container>
         <div className="">
            {/* User Sidebar Start  */}
            <div
              className={`fixed top-0 right-0 w-[470px] h-[695px] p-5 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
                isUserOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              {/* User Heading and Cross go here */}
              <div className="p-4 flex justify-between items-center ">
                <h2 className="text-2xl font-semibold">LOGIN</h2>
                <ImCross
                  onClick={() => setIsUserOpen(false)}
                  className="text-xl  cursor-pointer"
                />
              </div>
              {/* Cart Heading and Cross go here */}
              <div className=""></div>
            </div>
            {/* User Sidebar End  */}

            {/* ------------------------------------------------------------------------- */}

            {/* Cart Sidebar Start  */}
            <div
              className={`fixed top-0 right-0 w-[470px] h-[695px] p-5 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
                isCartOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              {/* Cart Heading and Cross go here */}
              <div className="p-4 flex justify-between items-center ">
                <h2 className="text-2xl font-semibold">SHOPPING BAG </h2>
                <ImCross
                  onClick={() => setIsCartOpen(false)}
                  className="text-xl  cursor-pointer"
                />
              </div>
              {/* Cart Heading and Cross go here */}
              <div className=""></div>
            </div>
            {/* Cart Sidebar End */}

            {/* ---------------------------------------------------------------------------- */}

            {/* Three Bar Sidebar Start  */}
            <div
              className={`fixed top-0 right-0 w-full h-[695px] p-5 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
                isMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              {/* Menu Heading and Cross go here */}
              <div className="p-4 flex justify-between items-center ">
                <h2 className="text-2xl font-semibold">MENU</h2>
                <ImCross
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xl  cursor-pointer"
                />
              </div>
              {/* Menu Heading and Cross go here */}
            </div>
            {/* Three Bar Sidebar End  */}
          </div>
      </div>
    </>
  );
};

export default Header;
