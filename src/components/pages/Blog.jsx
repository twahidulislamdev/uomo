import React from "react";
import Container from "../Container";
import BannerBg from "../../assets/bannerBg.png";
import { Link } from "react-router-dom";
import BlogCard from "../BlogCard";
import BlogOne from "../../assets/blogOne.jpg"
import Flex from "../Flex";

const Blog = () => {
  return <>
    <div className="">
      {/* Blog Banner Part Start */}
      <div
        className="py-5 lg:py-10 lg:m-0 px-3 w-full m-auto bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${BannerBg})` }}
      >
        <Container>
          <h3 className="text-2xl lg:text-7xl font-bold text-center text-mainColor">
            THE BLOG
          </h3>
          <ul className="flex justify-center  gap-x-5 lg:gap-x-15 text-center py-3 space-y-2 flex-wrap ">
            {["MAN", "WOMEN", "JACKRTS", "HOODIES", "TROUSERS", "SHOSE"].map(
              (item, idx) => (
                <Link to={item === "SHOP" ? "/shop" : "/"} key={idx}>
                  <li className="relative list-none w-[15%] px-2 py-2 text-sm font-medium text-black group cursor-pointer">
                    {item}
                    {/* <span className="absolute left-0 bottom-0  h-0.5 bg-black w-0 group-hover:w-full transition-all duration-300"></span> */}
                  </li>
                </Link>
              )
            )}
          </ul>
        </Container>
      </div>
      {/* Blog Banner Part End */}
      <div className="py-0 lg:py-10 bg-neutral-100">
        <Container>
          <Flex className={"lg:flex justify-between items-center flex-wrap gap-y-5"}>
            <BlogCard
              imgSrc={BlogOne}
              imgAlt={"Blog Two"}
              adminTxt={"BY ADMIN"}
              dateTxt={"APRIL 05, 2025"}
              BlogTitle={"Woman with good shoes is never be ugly place"}
              pTxt={"Midst one brought greater also morning green saying had good. Open stars day let over gathered, grass face one every light of under."}
            />
            <BlogCard
              imgSrc={BlogOne}
              imgAlt={"Blog Two"}
              adminTxt={"BY ADMIN"}
              dateTxt={"APRIL 05, 2025"}
              BlogTitle={"Woman with good shoes is never be ugly place"}
              pTxt={"Midst one brought greater also morning green saying had good. Open stars day let over gathered, grass face one every light of under."}
            />
            <BlogCard
              imgSrc={BlogOne}
              imgAlt={"Blog Two"}
              adminTxt={"BY ADMIN"}
              dateTxt={"APRIL 05, 2025"}
              BlogTitle={"Woman with good shoes is never be ugly place"}
              pTxt={"Midst one brought greater also morning green saying had good. Open stars day let over gathered, grass face one every light of under."}
            />
            <BlogCard
              imgSrc={BlogOne}
              imgAlt={"Blog Two"}
              adminTxt={"BY ADMIN"}
              dateTxt={"APRIL 05, 2025"}
              BlogTitle={"Woman with good shoes is never be ugly place"}
              pTxt={"Midst one brought greater also morning green saying had good. Open stars day let over gathered, grass face one every light of under."}
            />
            <BlogCard
              imgSrc={BlogOne}
              imgAlt={"Blog Two"}
              adminTxt={"BY ADMIN"}
              dateTxt={"APRIL 05, 2025"}
              BlogTitle={"Woman with good shoes is never be ugly place"}
              pTxt={"Midst one brought greater also morning green saying had good. Open stars day let over gathered, grass face one every light of under."}
            />
            <BlogCard
              imgSrc={BlogOne}
              imgAlt={"Blog Two"}
              adminTxt={"BY ADMIN"}
              dateTxt={"APRIL 05, 2025"}
              BlogTitle={"Woman with good shoes is never be ugly place"}
              pTxt={"Midst one brought greater also morning green saying had good. Open stars day let over gathered, grass face one every light of under."}
            />
          </Flex>
          <button className="flex justify-center items-center m-auto relative list-none pt-5 text-lg font-medium text-black group cursor-pointer transition-all ease-in-out">
            SEE MORE
            <span className="absolute left-0 bottom-0 h-0.5 bg-black w-1/3 group-hover:w-full transition-all duration-300"></span>
          </button>
        </Container>

      </div>

    </div>
  </>;
};

export default Blog;
