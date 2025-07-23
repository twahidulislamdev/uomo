import React from "react";
import Container from "./Container";

const TestimoniCard = ({ TestiParagraph, TestiDetails, imgSrc, imgAlt }) => {
  return (
    <>
      <div className="">
        <Container>
          <p
            className={`text-center w-3xl m-auto text-lg text-mainColor leading-8 pt-10 pb-6 `}
          >
            {TestiParagraph}
          </p>
          <p className={`text-center text-base  text-seconderyColor `}>
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
