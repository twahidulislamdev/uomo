import React from "react";

const Image = ({ className, imgSrc, imgAlt }) => {
  return <img className={`${className}`} src={imgSrc} alt={imgAlt} />;
};

export default Image;
