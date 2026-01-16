import React from "react";
import Container from "../Container";
import AboutOne from "../../assets/aboutOne.jpg";

const About = () => {
  return (
    <>
      <div className="">
        <Container>
          <h5 className="text-3xl font-bold uppercase pt-5">About oumo</h5>
          <img className="w-full h-full mt-5 " src={AboutOne} alt="" />
          <h6 className="mt-10 text-3xl font-semibold">OUR STORY</h6>
          <p className="text-md">
            <span >
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </span>
          </p>
        </Container>
      </div>
    </>
  );
};

export default About;
