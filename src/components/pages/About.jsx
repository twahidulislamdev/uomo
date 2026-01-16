import React from "react";
import Container from "../Container";
import AboutOne from "../../assets/aboutOne.jpg";

const About = () => {
  return (
    <>
      <div className="">
        <Container>
          <h5 className="text-3xl font-bold uppercase pt-5">About oumo</h5>
          <img className="w-full h-full pt-5 " src={AboutOne} alt="" />
          <h6 className="pt-10 text-3xl font-semibold">OUR STORY</h6>
          <p className="text-md pt-5">
            <span className="font-medium">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </span>
            <br />
            Saw wherein fruitful good days image them, midst, waters upon, saw.
            Seas lights seasons. Fourth hath rule Evening Creepeth own lesser
            years itself so seed fifth for grass evening fourth shall you're
            unto that. Had. Female replenish for yielding so saw all one to
            yielding grass you'll air sea it, open waters subdue, hath. Brought
            second Made. Be. Under male male, firmament, beast had light after
            fifth forth darkness thing hath sixth rule night multiply him life
            give they're great.
          </p>
          <div className="w-full flex justify-between flex-wrap gap-y-3 ">
            <div className="w-[50%]">
              <h6 className="pt-10 text-xl font-semibold">Our Mission</h6>
              <p>
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </p>
            </div>
            <div className="w-[50%]">
              <h6 className="pt-10 text-xl font-semibold">Our Vision</h6>
              <p>
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </p>
            </div>
            <div className="w-[50%]">
              <h6 className="pt-10 text-xl font-semibold">The Company</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                sapien dignissim a elementum. Sociis metus, hendrerit mauris id
                in. Quis sit sit ultrices tincidunt euismod luctus diam. Turpis
                sodales orci etiam phasellus lacus id leo. Amet turpis nunc,
                nulla massa est viverra interdum. Praesent auctor nulla morbi
                non posuere mattis. Arcu eu id maecenas cras.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default About;
