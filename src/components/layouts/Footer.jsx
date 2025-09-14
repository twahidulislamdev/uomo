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
    <div className="py-10 lg:py-15 bg-[#F5F5F3]">
      <Container>
        <Flex className="flex-col lg:flex-row lg:justify-between gap-10 lg:gap-0">
          {/* Left Logo & Info */}
          <div className="w-full lg:w-[30%] m-auto lg:m-0 text-center  lg:text-left">
           <div className="flex justify-center lg:justify-start">
             <Image imgSrc={HeaderLogo} imgAlt={"FooterLogo"} className="flex justify-center m-auto lg:mx-0" />
           </div>
            <p className="mt-6 lg:mt-10 text-sm px-5 lg:px-0 lg:pr-[100px]">
              1418 River Drive, Suite 35 Cottonhall, CA 96232 United States
            </p>
            <h6 className="py-6 lg:py-10 text-sm">
              sale@uomo.com <br /> <span>+1 246-345-0695</span>
            </h6>
            <div className="flex justify-center lg:justify-start space-x-5">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaYoutube />
              <FaPinterest />
            </div>
          </div>

          {/* Company */}
          <div className="w-1/2 lg:w-[10%] m-auto text-center lg:text-left">
            <Heading className="text-lg font-medium" txt={"COMPANY"} as={"h4"} />
            <ul className="mt-6 lg:mt-10 space-y-2 lg:space-y-3">
              <li className="text-sm">About Us</li>
              <li className="text-sm">Careers</li>
              <li className="text-sm">Affiliates</li>
              <li className="text-sm">Blog</li>
              <li className="text-sm">Contact Us</li>
            </ul>
          </div>

          {/* Shop */}
          <div className="w-1/2 lg:w-[10%] m-auto text-center lg:text-left">
            <Heading className="text-lg font-medium" txt={"SHOP"} as={"h4"} />
            <ul className="mt-6 lg:mt-10 space-y-2 lg:space-y-3">
              <li className="text-sm">New Arrivals</li>
              <li className="text-sm">Accessories</li>
              <li className="text-sm">Men</li>
              <li className="text-sm">Women</li>
              <li className="text-sm">Shop All</li>
            </ul>
          </div>

          {/* Help */}
          <div className="w-1/2 lg:w-[10%] m-auto text-center lg:text-left">
            <Heading className="text-lg font-medium" txt={"HELP"} as={"h4"} />
            <ul className="mt-6 lg:mt-10 space-y-2 lg:space-y-3">
              <li className="text-sm">Customer Service</li>
              <li className="text-sm">My Account</li>
              <li className="text-sm">Find a Store</li>
              <li className="text-sm">Legal & Privacy</li>
              <li className="text-sm">Contact</li>
              <li className="text-sm">Gift Card</li>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="w-full lg:w-[30%] text-center lg:text-left">
            <Heading className="text-lg font-medium" txt={"Subscribe"} as={"h4"} />
            <p className="w-3/4 lg:w-auto m-auto lg:m-0  mt-6 lg:mt-10 text-sm px-5 lg:px-0">
              Be the first to get the latest news about trends, promotions, and
              much more!
            </p>
            <div className="bg-white px-3 lg:px-5 py-3 mt-5 flex items-center w-[300px] lg:max-w-[350px] mx-auto lg:mx-0 shadow">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow outline-none text-gray-800 placeholder:text-gray-600 text-sm"
              />
              <button className="text-black font-semibold hover:cursor-pointer text-sm lg:text-base">
                JOIN
              </button>
            </div>
            <div>
              <p className="mt-5 text-base font-medium">Secure payments</p>
              <Flex className="mt-3 justify-center lg:justify-start space-x-5">
                <SiVisa className="text-3xl font-bold w-10" />
                <SiMastercard className="text-3xl font-bold" />
                <SiDiscover className="text-3xl font-bold" />
                <BiLogoPaypal className="text-2xl font-bold" />
                <SiGooglepay className="text-3xl font-bold" />
              </Flex>
            </div>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Footer;
