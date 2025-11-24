import React from "react";
import Banner from "../layouts/Banner";
import Button from "../Button";
import Trending from "../layouts/Trending";
import Collection from "../layouts/Collection";
import Testimonials from "../layouts/Testimonials";
import InsideCollection from "../layouts/InsideCollection";
import LimitedEdition from "../layouts/LimitedEdition";
import LatestBlog from "../layouts/LatestBlog";
import { ToastContainer } from "react-toastify";

const Home = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
