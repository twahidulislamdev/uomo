import React from "react";

const Heading = (props) => {
  return <props.as className={props.className}>{props.txt}</props.as>;
};

export default Heading;
