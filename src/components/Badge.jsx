import React from "react";

const Badge = ({ badgeClassName, badgeText }) => {
  return (
    <div
      className={`py-2 px-6 bg-white text-black font-bold text-center text-sm w-[80px] ${badgeClassName}`}
    >
      {badgeText}
    </div>
  );
};

export default Badge;
