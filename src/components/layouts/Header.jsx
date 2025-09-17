import { useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import HeaderLogo from "../../assets/headerLogo.png";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { HiOutlineShoppingBag, HiMiniBars3CenterLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import ProductOne from "../../assets/productOne.jpg";
import { HiPlusSmall, HiMinusSmall } from "react-icons/hi2";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "SHOP", path: "/shop" },
    { name: "BLOG", path: "/blog" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
    { name: "PAGES", path: "/pages" },
  ];

  return (
    <>
      {/* Desktop Header start */}
      <div className="hidden lg:block w-full m-auto py-5 overflow-hidden">
        <Container>
          <Flex className="justify-between items-center">
            <Link to={"/"}>
              <Image imgSrc={HeaderLogo} imgAlt="Header Logo" />
            </Link>
            <ul className="flex items-center gap-x-15 xl:gap-x-10">
              {menuItems.map((item, idx) => (
                <Link to={item.path} key={idx}>
                  <li className="relative list-none py-2 text-sm text-black font-medium group cursor-pointer transition-all ease-in-out">
                    {item.name}
                    <span className="absolute left-0 bottom-0 h-0.5 bg-black w-0 group-hover:w-full transition-all duration-300"></span>
                  </li>
                </Link>
              ))}
            </ul>
          </Flex>
        </Container>
      </div>
      {/* Desktop Header End */}

      {/* Mobile Header start */}
      <div className="w-full flex justify-center items-center m-auto py-4 px-3 lg:hidden bg-white shadow-sm overflow-hidden">
        <Container>
          <Flex className="justify-between items-center">
            <Link to={"/"}>
              <Image imgSrc={HeaderLogo} imgAlt="Header Logo" />
            </Link>

            {isMenuOpen ? (
              <FaTimes
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl cursor-pointer"
              />
            ) : (
              <FaBars
                onClick={() => setIsMenuOpen(true)}
                className="text-3xl cursor-pointer"
              />
            )}
          </Flex>

          {isMenuOpen && (
            <div className="w-full mt-4 bg-gray-100 rounded-md shadow-sm">
              <ul className="text-center py-3 space-y-2">
                {menuItems.map((item, idx) => (
                  <Link
                    to={item.path}
                    key={idx}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <li className="relative list-none py-2 text-sm font-medium text-black group cursor-pointer">
                      {item.name}
                      <span className="absolute left-0 bottom-0 h-0.5 bg-black w-0 group-hover:w-full transition-all duration-300"></span>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          )}
        </Container>
      </div>
      {/* Mobile Header End */}

      {/* Header Lower Part Start */}
      <div className="w-full flex justify-center m-auto px-3 py-4 bg-[#F5F5F3] overflow-hidden">
        <Container>
          <div className="flex justify-between items-center">
            {/* Category Icon */}
            <HiMiniBars3CenterLeft
              onClick={() => setIsCategoryOpen(true)}
              className="text-2xl cursor-pointer"
            />
            {/* Search */}
            <div className="flex-1 mx-3 lg:mx-8 flex justify-center items-center">
              <input
                className="w-[200px] lg:w-[500px] py-2 px-3 rounded-md border border-gray-300 outline-1 outline-gray-300 bg-[#F5F5F5] text-sm"
                type="text"
                placeholder="What are you looking?"
              />
            </div>

            {/* Icons */}
            <div className="flex items-center gap-x-3 lg:gap-x-8">
              <FaRegHeart className="text-xl cursor-pointer" />
              <FaRegUser
                onClick={() => setIsUserOpen(true)}
                className="text-xl cursor-pointer"
              />
              <HiOutlineShoppingBag
                onClick={() => setIsCartOpen(true)}
                className="text-2xl cursor-pointer"
              />
            </div>
          </div>
        </Container>

        {/* User Sidebar */}
        {isUserOpen && (
          <div className="fixed top-0 right-0 w-[98%] lg:w-[500px] h-screen px-10 lg:px-4 py-5 bg-white shadow-lg z-50">
            <div className="flex justify-between items-center mb-5">
              <h4 className="text-lg font-medium">LOGIN</h4>
              <GrClose
                onClick={() => setIsUserOpen(false)}
                className="text-xl cursor-pointer mr-3 lg:mr-0"
              />
            </div>
          </div>
        )}

        {/* Cart Sidebar */}
        {isCartOpen && (
          <div className="fixed top-0 right-0 w-full lg:w-[500px] h-screen px-5 py-10 bg-white shadow-lg z-50">
            <div className="flex justify-between items-center mb-5">
              <h4 className="text-lg font-medium">SHOPPING BAG</h4>
              <GrClose
                onClick={() => setIsCartOpen(false)}
                className="text-xl cursor-pointer mr-3 lg:mr-0"
              />
            </div>
            {/* AddToCart Single Product start */}
            <div className="flex justify-between bg-neutral-100">
              <div className="flex gap-x-5 lg:gap-x-7">
                <Image
                  className={"w-170px h-[150px]"}
                  imgSrc={ProductOne}
                  imgAlt={""}
                />
                <div>
                  <h4 className="text-xl font-normal text-mainColor pt-2">
                    Zessi Dresses
                  </h4>
                  <h5 className="text-md text-[#767676] pt-2">Color: </h5>
                  <h6 className="text-md text-[#767676] pt-2">Size: L</h6>
                  <div className="flex justify-between items-center">
                    <div className="flex justify-center items-center gap-x-5 mt-2">
                      <span className="text-xl text-[#767676]">
                        <HiMinusSmall />
                      </span>
                      <p className="text-xl text-[#767676]">0</p>
                      <span className="text-xl text-[#767676]">
                        <HiPlusSmall />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-20">
                <p className="text-sm pt-4 pr-5">
                  <GrClose />
                </p>
                <p className="text-xl pr-5">99</p>
              </div>
            </div>
            {/* AddToCart Single Product End */}
          </div>
        )}

        {/* Category Sidebar */}
        {isCategoryOpen && (
          <div className="fixed top-0 left-0 w-full h-screen px-10 lg:px-4 py-5 bg-white shadow-lg z-50">
            <div className="flex justify-between items-center mb-5">
              <h4 className="text-lg font-medium">MENU</h4>
              <GrClose
                onClick={() => setIsCategoryOpen(false)}
                className="text-xl cursor-pointer mr-3 lg:mr-0"
              />
            </div>
          </div>
        )}
      </div>
      {/* Header Lower Part End */}
    </>
  );
};

export default Header;
