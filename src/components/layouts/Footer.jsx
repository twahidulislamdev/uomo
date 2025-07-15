import React from "react";
import Heading from "../Heading";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import HeaderLogo from "../../assets/headerLogo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";
import {
  SiVisa,
  SiMastercard,
  SiDiscover,
  SiGooglepay,
} from "react-icons/si";
import { BiLogoPaypal } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="py-15  bg-[#F5F5F3]">
      <Container>
        <Flex className={" justify-between "}>
          <div className="w-[30%] m-auto">
            <Image imgSrc={HeaderLogo} imgAlt={"FooterLogo"} />
            <p className="pr-[100px] mt-10 text-sm text-">
              1418 River Drive, Suite 35 Cottonhall, CA 9622 United States
            </p>
            <h6 className="py-10 text-sm">
              sale@uomo.com <br /> <span>+1 246-345-0695</span>
            </h6>
            <div className="flex space-x-5">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaYoutube />
              <FaPinterest />
            </div>
          </div>
          {/* First part start  */}
          <div className="w-[10%] mr-10">
            <Heading className={"text-lg font-medium"} txt={"COMPANY"} as={"h4"} />
            <ul className="mt-10 space-y-3">
              <li className="text-sm  ">About Us</li>
              <li className="text-sm ">Careers</li>
              <li className="text-sm ">Affiliates</li>
              <li className="text-sm ">Blog</li>
              <li className="text-sm ">Contact Us</li>
            </ul>
          </div>
          {/* First part End  */}
          {/* Second part start  */}
          <div className="w-[10%] mr-5">
            <Heading className={"text-lg font-medium"} txt={"SHOP"} as={"h4"} />
            <ul className="mt-10 space-y-3">
              <li className="text-sm   ">New Arrivals</li>
              <li className="text-sm   ">Accessories</li>
              <li className="text-sm   ">Men</li>
              <li className="text-sm  ">Women</li>
              <li className="text-sm  ">Shop All</li>
            </ul>
          </div>
          {/* Second part End  */}
          {/* Third part start  */}
          <div className="w-[10%]">
            <Heading className={"text-lg font-medium"} txt={"HELP"} as={"h4"} />
            <ul className="mt-10 space-y-3">
              <li className="text-sm  ">Customer Service</li>
              <li className="text-sm  ">My Account</li>
              <li className="text-sm  ">Find a Store</li>
              <li className="text-sm  ">Legal & Privacy</li>
              <li className="text-sm  ">Contact</li>
              <li className="text-sm  ">Gift Card</li>
            </ul>
          </div>
          {/* Third part End  */}
          {/* Four part Start  */}
          <div className="w-[30%] ml-25 ">
            <Heading
              className={"text-lg font-medium"}
              txt={"Subscribe"}
              as={"h4"}
            />
            <p className="mt-10 text-sm text-left">
              Be the first to get the latest news about trends, promotions, and
              much more!
            </p>
            <div className="bg-white px-5 py-3 mt-5 flex items-center w-[350px] shadow">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow outline-none text-gray-800 placeholder:text-gray-600"
              />
              <button className="text-black font-semibold hover:cursor-pointer">JOIN</button>
            </div>
            <div className="">
              <p className="mt-5 text-base font-medium">Secure payments</p>
              <Flex className={"mt-3 space-x-5"}>
                <SiVisa className="text-3xl font-bold w-10"/>
                <SiMastercard className="text-3xl font-bold"/>
                <SiDiscover className="text-3xl font-bold"/>
                <BiLogoPaypal className="text-2xl font-bold"/>
                <SiGooglepay className="text-3xl font-bold"/>
              </Flex>
            </div>
          </div>
          {/* Four part End  */}
        </Flex>
      </Container>
    </div>
  );
};

export default Footer;
