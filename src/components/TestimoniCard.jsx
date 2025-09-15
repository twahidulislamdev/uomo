import React from "react";
import Container from "./Container";

const TestimoniCard = ({ TestiParagraph, TestiDetails, imgSrc, imgAlt }) => {
  return (
    <>
      <div className="px-3 lg:px-0 ">
        <Container>
          <p
            className={`w-5/6 lg:max-w-3xl text-sm lg:text-lg m-auto text-center text-mainColor leading-8 py-5`}
          >
            {TestiParagraph}
          </p>
          <p className={`text-center text-base text-seconderyColor`}>
            {TestiDetails}
          </p>
          <img
            className="flex justify-center items-center m-auto mt-5"
            src={imgSrc}
            alt={imgAlt}
          />
        </Container>
      </div>
    </>
  );
};

export default TestimoniCard;
