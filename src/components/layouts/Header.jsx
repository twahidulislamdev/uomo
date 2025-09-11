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

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);

  return (
    <>
      {/* Header Upper Part Start  */}
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
          </Flex>
        </Container>
      </div>
      {/* Header Upper Part End  */}

      {/* Header Lower Part Start  */}
      <div className="relative bg-[#F5F5F3] w-full py-4">
        <Container className={""}>
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-x-3">
              <HiMiniBars3CenterLeft
                onClick={() => setIsMenuOpen(true)}
                className=" text-2xl   hover:cursor-pointer"
              />
              <h6 className="text-base text-neutral-600">Catagories</h6>
            </div>
            <div className="">
              {/* Search part Start  */}
              <div className="relative flex justify-center items-center mr-3">
                <input
                  className=" py-2 px-5 w-[500px] outline-1 outline-gray-200 bg-[#F5F5F5]"
                  type="text"
                  size={"35"}
                  placeholder="What are you looking for?"
                />
                <BsSearch className="absolute right-5 text-xl " />
              </div>
              {/* Search part End  */}
            </div>
            <div className="flex justify-center items-center *:mr-3 gap-x-5">
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
        <div
          className={`absolute top-0 right-0 w-[470px] h-[695px] px-3 py-5 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
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
        {/* User Login/Log out Sidebar End <= */}

        {/* Cart Sidebar Start => */}
        <div
          className={`absolute top-0 right-0 w-[470px] h-[695px] px-3 py-5 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
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
        {/* Cart Sidebar End <=  */}

        {/* Three Bar Sidebar Start =>  */}
        <div
          className={`absolute top-0 left-0 w-full h-[695px] px-3 py-5 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Menu Heading and Cross go here */}
          <div className="p-4 flex justify-between items-center ">
            <GrClose
              onClick={() => setIsMenuOpen(false)}
              className="text-xl font-bold cursor-pointer"
            />
            <h4 className="text-xl font-medium">MENU</h4>
          </div>
          {/* Menu Heading and Cross go here */}
        </div>
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
