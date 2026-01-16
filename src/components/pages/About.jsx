import React from "react";
import Container from "../Container";
import AboutOne from "../../assets/aboutOne.jpg";

const About = () => {
  return (
    <>
      <div className="">
        <Container>
          <h6 className="text-3xl font-bold uppercase pt-5">About oumo</h6>
          <img className="w-full h-full mt-5 " src={AboutOne} alt="" />
        </Container>
      </div>
    </>
  );
};

export default About;
