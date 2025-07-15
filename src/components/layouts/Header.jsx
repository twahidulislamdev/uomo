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
                <li className="relative list-none px-3 py-2 text-sm  text-black  font-medium cursor-pointer group  hover:text-black  hover:cursor-pointer hover:translate-x-0 transition-all ease-in-out ">
                  HOME
                  {/* <span className=" absolute bottom-0 left-1/2 -translate-x-1/2  h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0 group-hover:translate-x-0"></span> */}
                </li>
                </Link>
                <Link to={"/shop"}>
                <li className="relative list-none px-3 py-2 text-sm  text-black  font-medium cursor-pointer group  hover:text-black  hover:cursor-pointer hover:translate-x-0 transition-all ease-in-out ">
                  SHOP
                  {/* <span className=" absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0 group-hover:translate-x-0"></span> */}
                </li>
                </Link>
                <li className="relative list-none px-3 py-2 text-sm  text-black  font-medium cursor-pointer group  hover:text-black  hover:cursor-pointer hover:translate-x-0 transition-all ease-in-out ">
                  COLLECTION
                  {/* <span className=" absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0 group-hover:translate-x-0"></span> */}
                </li>
                <li className="relative list-none px-3 py-2 text-sm  text-black  font-medium cursor-pointer group  hover:text-black  hover:cursor-pointer hover:translate-x-0 transition-all ease-in-out ">
                  Journal
                  {/* <span className=" absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0 group-hover:translate-x-0"></span> */}
                </li>
                <li className="relative list-none px-3 py-2 text-sm  text-black  font-medium cursor-pointer group  hover:text-black  hover:cursor-pointer hover:translate-x-0 transition-all ease-in-out ">
                  LOOKBOOK
                  {/* <span className=" absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0 group-hover:translate-x-0"></span> */}
                </li>
                <li className="relative list-none px-3 py-2 text-sm  text-black  font-medium cursor-pointer group  hover:text-black  hover:cursor-pointer hover:translate-x-0 transition-all ease-in-out ">
                  PAGES
                  {/* <span className=" absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0 group-hover:translate-x-0"></span> */}
                </li>
              </ul>
            </div>
            <div className="">
              <Flex className={"gap-x-8"}>
                <BsSearch className="text-xl" />
                <FaRegUser className="text-xl" />
                <FaRegHeart className="text-xl" />
                <HiOutlineShoppingBag className="text-2xl font-extrabold" />
                <HiMiniBars3CenterLeft className="text-2xl" />
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Header;
