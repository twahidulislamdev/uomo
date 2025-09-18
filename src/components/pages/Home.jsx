import React from "react";
import Banner from "../layouts/Banner";
import Button from "../Button";
import Trending from "../layouts/Trending";
import Collection from "../layouts/Collection";
import Testimonials from "../layouts/Testimonials";
import InsideCollection from "../layouts/InsideCollection";
import LimitedEdition from "../layouts/LimitedEdition";
import LatestBlog from "../layouts/LatestBlog";

const Home = () => {
  return (
    <>
      <Banner />
      <Trending />
      <Collection />
      <Testimonials />
      <InsideCollection />
      <LimitedEdition />
      <LatestBlog />
    </>
  );
};

export default Home;
