import { useEffect, useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import HeaderLogo from "../../assets/headerLogo.png";
import CatagoryOne from "../../assets/catagoryOne.jpg";
import CatagoryTwo from "../../assets/catagoryTwo.jpg";
import CatagoryThree from "../../assets/catagoryThree.jpg";
import CatagoryFour from "../../assets/catagoryFour.jpg";
import CatagoryFive from "../../assets/catagoryFive.jpg";
import {
  FaRegUser,
  FaRegHeart,
  FaBars,
  FaTimes,
  FaGoogle,
} from "react-icons/fa";
import {
  HiOutlineShoppingBag,
  HiMiniBars3CenterLeft,
  HiPlusSmall,
  HiMinusSmall,
} from "react-icons/hi2";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import ProductOne from "../../assets/productOne.jpg";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, remove } from "../../features/addToCartSlice";

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

  let data = useSelector((state) => state.addtocart.value);
  let dispatch = useDispatch();

  // Calculate subtotal
  const calculateSubtotal = () => {
    return data.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  let handleIncerment = (item) => {
    dispatch(increment(item));
  };
  let handleDecerment = (item) => {
    dispatch(decrement(item));
  };
  let handleRemove = (item) => {
    dispatch(remove(item));
  };
  useEffect(() => {
    if (isCartOpen || isUserOpen || isCategoryOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isCartOpen, isUserOpen, isCategoryOpen]);

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
          <div className="fixed top-0 right-0 w-[98%] lg:w-[500px] h-screen p-7 lg:p-10  bg-white shadow-lg z-50">
            <div className="flex justify-between items-center mb-5">
              <h4 className="text-lg font-medium">LOGIN</h4>
              <GrClose
                onClick={() => setIsUserOpen(false)}
                className="text-xl cursor-pointer  lg:mr-0"
              />
            </div>
            <div className="mt-10">
              <form className="max-w-sm mx-auto">
                {/* Email Start  */}
                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-base font-medium text-black"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-400 text-gray-900 text-lg block w-full py-3 px-2 dark:placeholder-gray-400"
                    placeholder="name@gmail.com"
                    required=""
                  />
                </div>
                {/* Email End  */}
                {/* PassWord Start  */}
                <div className="mb-5">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-base font-medium text-black"
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="bg-gray-50 border border-gray-400 text-gray-900 text-lg block w-full py-3 px-2"
                    placeholder="*******"
                    required=""
                  />
                </div>
                {/* Password End  */}
                {/* Checkbox Start  */}
                <div className="flex justify-between items-center ">
                  <div className="flex justify-start items-center mb-5">
                    <div className="flex  items-center h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        defaultValue=""
                        className="w-4 h-4 border border-gray-400 rounded-sm bg-gray-50 "
                        required=""
                      />
                    </div>
                    <label
                      htmlFor="remember"
                      className="ms-2 text-base font-medium text-mainColor dark:text-gray-700"
                    >
                      Remember me
                    </label>
                  </div>
                  <div className="mb-5">
                    <p className="text-base font-medium text-mainColor dark:text-gray-700 border-b-1 pb-0 border-gray-700 hover:cursor-pointer">
                      Forget Password?
                    </p>
                  </div>
                </div>
                {/* Checkbox End  */}
                {/* Submit Button Start  */}
                <button
                  type="submit"
                  className="w-full bg-black text-white font-medium  text-lg  px-5 py-3 text-center hover:cursor-pointer"
                >
                  LOG IN
                </button>
                {/* Submit Button ENd  */}
                {/* Creat Account Part Start  */}
                <div className="mt-5 text-center">
                  <p className="">
                    No account yet?
                    <span className="w-auto text-base font-medium text-mainColor dark:text-gray-700 border-b-1 pb-0 px-2 border-gray-700 hover:cursor-pointer">
                      Creat Account
                    </span>
                  </p>
                </div>
                {/* Creat Account Part End  */}
                <hr className="w-full m-auto items-center border-neutral-400 mt-5" />
                {/* Login By Google Account start  */}
                <div className="bg-black mt-5 w-full flex justify-center items-center gap-x-3 border-1 border-gray-400 px-5 py-3">
                  <span>
                    <FaGoogle className="text-white text-lg font-medium" />
                  </span>
                  <h6 className="text-white text-lg font-medium">
                    Login With Google
                  </h6>
                </div>
                {/* Login By Google Account End  */}
              </form>
            </div>
          </div>
        )}

        {/* Cart Sidebar */}
        {isCartOpen && (
          <div className="fixed top-0 right-0 w-full lg:w-[500px] h-[100vh] px-5 py-5 bg-white shadow-lg z-50">
            <div className="flex justify-between items-center mb-3">
              <h4 className="text-xl font-medium">SHOPPING BAG</h4>
              <GrClose
                onClick={() => setIsCartOpen(false)}
                className="text-xl font-bold cursor-pointer mr-3 lg:mr-0"
              />
            </div>
            {/* AddToCart Single Product start */}
            <div className="overflow-y-auto max-h-[calc(97vh-250px)]">
              {data.map((item) => (
                <div className="bg-neutral-100 mb-3  rounded-md" key={item.title}>
                  <div className="flex justify-between">
                    <div className="flex justify-center gap-x-5 lg:gap-x-7">
                      <Image
                        className={"w-[170px] h-auto"}
                        imgSrc={item.img}
                        imgAlt={item.title}
                      />
                      <div>
                        <h4 className="w-full pr-2 text-lg font-normal text-mainColor pt-2 text-wrap">
                          {item.title}
                        </h4>
                        <h5 className="text-base text-[#767676] pt-2">
                          Color: {item.color}
                        </h5>
                        <h6 className="text-base text-[#767676] pt-2">
                          Size: {item.size}
                        </h6>
                        <h6 className="text-base text-[#767676] pt-2">
                          Unit Price: ${item.price.toFixed(2)}
                        </h6>
                        <h6 className="text-base font-medium pt-2">
                          Total: ${(item.price * item.quantity).toFixed(2)}
                        </h6>
                        {/* Increment Decrement start */}
                        <div className="flex justify-start items-center gap-x-5 mt-2">
                          <span className="text-xl text-[#767676]">
                            <HiMinusSmall onClick={() => handleDecerment(item)} />
                          </span>
                          <p className="text-xl text-[#767676]">
                            {item.quantity}
                          </p>
                          <span className="text-xl text-[#767676]">
                            <HiPlusSmall onClick={() => handleIncerment(item)} />
                          </span>
                        </div>
                        {/* Increment Decrement End */}
                      </div>
                    </div>
                    {/* Price And Cross part start */}
                    <div className="relative">
                      <p className="absolute top-0 right-3 text-sm pt-3 px-2 cursor-pointer">
                        <GrClose onClick={() => handleRemove(item)} />
                      </p>
                    </div>
                    {/* Price And Cross part End */}
                  </div>
                </div>
              ))}
            </div>
            {/* AddToCart Single Product End */}
            {/* Sub Total/ view cart section Start */}
            <div className="border-t-2 border-gray-300 pt-5">
              <div className="flex justify-between items-center">
                <h5 className="text-2xl font-semibold">SUBTOTAL:</h5>
                <p className="text-2xl font-semibold">${calculateSubtotal()}</p>
              </div>
              <div className="text-center text-lg font-medium mt-5 py-5 lg:py-3 w-full bg-[#E4E4E4] hover:cursor-pointer">
                VIEW CART
              </div>
              <div className="text-center text-lg text-white font-medium mt-5 py-5 lg:py-3 w-full bg-mainColor hover:cursor-pointer">
                CHECKOUT
              </div>
            </div>
            {/* Sub Total/ view cart section End */}
          </div>
        )}

        {/* Category Sidebar */}
        {isCategoryOpen && (
          <div className="fixed top-0 left-0 w-full h-screen bg-white shadow-lg z-50">
            <div className="flex">
              <div className="w-[50%] h-screen hidden lg:block">
                <Image
                  className={"w-full h-full"}
                  imgSrc={CatagoryFive}
                  imgAlt={""}
                />
              </div>
              <div className="w-full lg:w-[50%] p-5 lg:p-10">
                <div className="flex justify-between items-center">
                  <div className="flex gap-x-5 lg:gap-x-15">
                    <h5 className="py-2 px-5 hover:bg-black hover:text-white rounded-md text-lg font-semibold transition-all duration-300 delay-200 border-2 border-gray-300">
                      WOMEN
                    </h5>
                    <h6 className="py-2 px-5 hover:bg-black hover:text-white rounded-md text-lg font-semibold transition-all duration-300 delay-200 border-2 border-gray-300">
                      MAN
                    </h6>
                    <p className="py-2 px-5 hover:bg-black hover:text-white rounded-md text-lg font-semibold transition-all duration-300 delay-200 border-2 border-gray-300">
                      KIDS
                    </p>
                  </div>
                  <div>
                    <GrClose
                      onClick={() => setIsCategoryOpen(false)}
                      className="text-xl cursor-pointer"
                    />
                  </div>
                </div>
                <div className="px-5 mt-10">
                  <ul className="space-y-5">
                    <li className="text-xl font-medium uppercase">New</li>
                    <li className="text-xl font-medium uppercase">Best Sellers</li>
                    <li className="text-xl font-medium uppercase">Collaborations®</li>
                    <li className="text-xl font-medium uppercase">Denim</li>
                    <li className="text-xl font-medium uppercase">Jackets & Coats</li>
                    <li className="text-xl font-medium uppercase">Overshirts</li>
                    <li className="text-xl font-medium uppercase">Trousers</li>
                    <li className="text-xl font-medium uppercase">Jeans</li>
                    <li className="text-xl font-medium uppercase">T-shirts & Tops</li>
                    <li className="text-xl font-medium uppercase">Shirts & Blouses</li>
                    <li className="text-xl font-medium uppercase">Shoes</li>
                    <li className="text-xl font-medium uppercase">Accessories</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Header Lower Part End */}
    </>
  );
};

export default Header;