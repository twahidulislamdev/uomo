import React from "react";
import Container from "./Container";
import Image from "./Image";
import Flex from "./Flex";

const LatestBlogCard = ({ imgSrc, imgAlt, adminTxt, dateTxt, pTxt }) => {
  return (
    <>
      <div className="mx-3 bg-white mb-5 ">
        <img className="w-full " src={imgSrc} alt={imgAlt} />

        <div className="w-full py-5 ">
          <ul className="flex justify-center gap-x-5 ">
            <li className="text-sm text-seconderyColor">{adminTxt}</li>
            <li className="text-sm text-seconderyColor">{dateTxt}</li>
          </ul>
          <p className="text-base text-center m-auto text-mainColor w-2/3 pt-3">
            {pTxt}
          </p>
        </div>
      </div>
    </>
  );
};

export default LatestBlogCard;
