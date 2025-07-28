import React from "react";
import LatestBlogCard from "../LatestBlogCard";
import Container from "../Container";
import Flex from "../Flex";
import BlogOne from "../../assets/blogOne.png";

const LatestBlog = () => {
  return (
    <>
      <div className="py-15 bg-[#F3EDDF]  ">
        <Container>
            <h3 className="text-center text-3xl mb-10">Latest in Blog</h3>
          <Flex>
            <LatestBlogCard imgSrc={BlogOne} imgAlt={"Blog One"}
            adminTxt={"BY ADMIN"}
            dateTxt={"APRIL 05, 2025"}
            pTxt={`Woman with good shoes is 
never be ugly place`} />
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default LatestBlog;
