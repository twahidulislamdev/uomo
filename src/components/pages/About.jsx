import React from "react";
import Container from "../Container";
import AboutOne from "../../assets/aboutOne.jpg";
import AboutTwo from "../../assets/aboutTwo.jpg";

const About = () => {
  return (
    <>
      <div className="py-10 ">
        <Container>
          {/* Header */}
          <div className="text-center mb-12 mx-3 lg:mx-0">
            <h5 className="text-4xl font-bold uppercase">About Oumo</h5>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Learn more about our journey, values, and what drives us forward.
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-16 mx-3 lg:mx-0">
            <img
              className="w-full h-[400px] object-cover rounded-xl shadow-md"
              src={AboutOne}
              alt="About Oumo"
            />
          </div>

          {/* Our Story */}
          <div className="max-w-4xl  mb-20 mx-3 lg:mx-auto">
            <h6 className="text-3xl font-semibold mb-6">Our Story</h6>
            <p className="text-gray-700 leading-7">
              <span className="font-medium">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </span>
              <br />
              <br />
              Saw wherein fruitful good days image them, midst, waters upon,
              saw. Seas lights seasons. Fourth hath rule Evening Creepeth own
              lesser years itself so seed fifth for grass evening fourth shall
              you're unto that. Had. Female replenish for yielding so saw all
              one to yielding grass you'll air sea it.
            </p>
          </div>

          {/* Mission / Vision / Company */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mx-3 lg:mx-0">
            <div className="space-y-8">
              <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
                <h6 className="text-xl font-semibold mb-3">Our Mission</h6>
                <p className="text-gray-600">
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat.
                </p>
              </div>

              <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
                <h6 className="text-xl font-semibold mb-3">Our Vision</h6>
                <p className="text-gray-600">
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat.
                </p>
              </div>

              <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
                <h6 className="text-xl font-semibold mb-3">The Company</h6>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Amet sapien dignissim a elementum. Sociis metus, hendrerit
                  mauris id in.
                </p>
              </div>
            </div>

            {/* Side Image */}
            <div>
              <img
                className="w-full h-[450px] object-cover rounded-xl shadow-md"
                src={AboutTwo}
                alt="Company"
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default About;
