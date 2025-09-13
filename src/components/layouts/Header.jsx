import { useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import HeaderLogo from "../../assets/headerLogo.png";
import { BsSearch } from "react-icons/bs";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag, HiMiniBars3CenterLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { FaBars } from "react-icons/fa6";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCtategoryOpen, setIsCategoryOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Header Upper Part Start  */}
      <div className="hidden lg:block w-full py-5">
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
          </Flex>
        </Container>
      </div>

      {/* -----------------------------============================= */}
      {/* Responsive Header Start  */}
      <div className="block lg:hidden py-5 lg:py-0 mx-2 lg:mx-0">
        <Container>
          <Flex className={"justify-between items-center"}>
            <div className="ml-5">
              <Image imgSrc={HeaderLogo} imgAlt={"Header Logo"} />
            </div>
            <div className="">
              <FaBars
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-4xl"
              />
            </div>
          </Flex>
          {isMenuOpen && (
            <div className="ml-3 mt-5 bg-gray-200">
              <ul className="text-center">
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
          )}
        </Container>
      </div>
      {/* Responsive Header End   */}
      {/* -----------------------------============================= */}
      {/* Header Upper Part End  */}
      {/* --------------------================================================= */}
      {/* --------------------================================================= */}

      {/* --------------------================================================= */}
      {/* --------------------================================================= */}
      {/* Header Lower Part Start  */}
      <div className="py-5 px-2 lg:px-0 relative bg-[#F5F5F3] w-[98%] ml-3 lg:ml-0 lg:w-full  ">
        <Container className={""}>
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-1 gap-x-0 lg:gap-x-3 ">
              <HiMiniBars3CenterLeft
                onClick={() => setIsCategoryOpen(true)}
                className=" text-2xl   hover:cursor-pointer"
              />
            </div>
            <div className="">
              {/* Search part Start  */}
              <div className="relative flex justify-center items-center mx-2 ">
                <input
                  className=" py-2 px-2 w-[210px] lg:w-[500px] outline-1 outline-gray-300 bg-[#F5F5F5]"
                  type="text"
                  placeholder="What are you looking?"
                />
                <BsSearch className="absolute right-1 lg:right-5 text-xl " />
              </div>
              {/* Search part End  */}
            </div>
            <div className="flex justify-center items-center mr-0 lg:*:mr-3 gap-x-3  lg:gap-x-5">
              <FaRegHeart className=" text-xl hover:cursor-pointer" />
              <FaRegUser
                onClick={() => setIsUserOpen(true)}
                className=" text-xl hover:cursor-pointer"
              />
              <HiOutlineShoppingBag
                onClick={() => setIsCartOpen(true)}
                className=" text-2xl  hover:cursor-pointer"
              />
            </div>
          </div>
        </Container>
        {/* --------------------------- -------------------*/}
        {/* User Login/Log out Sidebar Start =>  */}
        {isUserOpen && (
          <div
            className={`absolute top-0 right-0 w-full lg:w-[470px] h-screen lg:h-[695px] px-3 py-5 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
              isUserOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* User Heading and Cross go here */}
            <div className="p-4 flex justify-between items-center ">
              <h4 className="text-xl font-medium">LOGIN</h4>
              <GrClose
                onClick={() => setIsUserOpen(false)}
                className="text-xl font-bold cursor-pointer"
              />
            </div>
            {/* Cart Heading and Cross go here */}
            <div className=""></div>
          </div>
        )}
        {/* User Login/Log out Sidebar End <= */}

        {/* Cart Sidebar Start => */}
        {isCartOpen && (
          <div
            className={`absolute top-0 right-0 w-full lg:w-[470px] h-[695px] px-3 py-5 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
              isCartOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Cart Heading and Cross go here */}
            <div className="p-4 flex justify-between items-center ">
              <h4 className="text-xl font-medium">SHOPPING BAG </h4>
              <GrClose
                onClick={() => setIsCartOpen(false)}
                className="text-xl font-bold cursor-pointer"
              />
            </div>
            {/* Cart Heading and Cross go here */}
          </div>
        )}
        {/* Cart Sidebar End <=  */}

        {/* Three Bar Sidebar Start =>  */}
        {isCtategoryOpen && (
          <div
            className={`absolute top-0 left-0 lg-full w-screen h-[695px] px-0 lg:px-3 py-0 lg:py-5 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
              isCtategoryOpen ? "-translate-x-0" : "-translate-x-full"
            }`}
          >
            {/* Menu Heading and Cross go here */}
            <div className="p-4 flex justify-between items-center ">
              <GrClose
                onClick={() => setIsCategoryOpen(false)}
                className="text-xl font-bold cursor-pointer"
              />
              <h4 className="text-xl font-medium">MENU</h4>
            </div>
            {/* Menu Heading and Cross go here */}
          </div>
        )}
        {/* Three Bar Sidebar End <= */}
      </div>
      {/* Header Lower Part End  */}
    </>
  );
};

export default Header;
{
  /* User Sidebar Start  */
}

{
  /* User Sidebar End  */
}
