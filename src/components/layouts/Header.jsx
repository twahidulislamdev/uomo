import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import HeaderLogo from "../../assets/headerLogo.png";
import { BsSearch } from "react-icons/bs";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag, HiMiniBars3CenterLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="py-7">
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
              <Flex className="justify-center items-center *:mr-3 gap-x-3">
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
                <FaRegUser className=" text-xl hover:cursor-pointer" />
                <HiOutlineShoppingBag className=" text-2xl  hover:cursor-pointer" />
                <HiMiniBars3CenterLeft className=" text-2xl  hover:cursor-pointer" />
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Header;
