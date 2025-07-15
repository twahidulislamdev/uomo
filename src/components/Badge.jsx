import React from "react";

const Badge = ({ className, badgeText }) => {
  return (
    <div
      className={`py-2 px-8 bg-white text-black font-bold text-center text-sm w-[90px] ${className}`}
    >
      {badgeText}
    </div>
  );
};

export default Badge;
