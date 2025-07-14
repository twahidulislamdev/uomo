import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import HeaderLogo from "../../assets/headerLogo.png";
import { BsSearch } from "react-icons/bs";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag, HiMiniBars3CenterLeft } from "react-icons/hi2";

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
                <li className="text-sm text-menuColor hover:text-black font-medium hover:cursor-pointer hover:border-b-2 hover:border-black hover:translate-x-0 transition-all ease-in-out ">
                  HOME
                </li>

                <li className="text-sm text-menuColor hover:text-black font-medium hover:cursor-pointer hover:border-b-2 hover:border-black hover:translate-x-0 transition-all ease-in-out ">
                  SHOP
                </li>

                <li className="text-sm text-menuColor hover:text-black font-medium hover:cursor-pointer hover:border-b-2 hover:border-black hover:translate-x-0 transition-all ease-in-out ">
                  COLLECTION
                </li>

                <li className="text-sm text-menuColor hover:text-black font-medium hover:cursor-pointer hover:border-b-2 hover:border-black hover:translate-x-0 transition-all ease-in-out ">
                  Journal
                </li>

                <li className="text-sm text-menuColor hover:text-black font-medium hover:cursor-pointer hover:border-b-2 hover:border-black hover:translate-x-0 transition-all ease-in-out ">
                  LOOKBOOK
                </li>
                <li className="text-sm text-menuColor hover:text-black font-medium hover:cursor-pointer hover:border-b-2 hover:border-black hover:translate-x-0 transition-all ease-in-out ">
                  PAGES
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
