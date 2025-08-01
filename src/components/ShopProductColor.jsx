import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ShopProductColor = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedColor, setSelectedColor] = useState("gray");
  const colors = [
    { name: "navy", bgColor: "bg-blue-900", value: "#1e3a8a" },
    { name: "yellow", bgColor: "bg-yellow-500", value: "#eab308" },
    { name: "black", bgColor: "bg-black", value: "#000000" },
    { name: "lightblue", bgColor: "bg-blue-200", value: "#bfdbfe" },
    { name: "brown", bgColor: "bg-amber-700", value: "#b45309" },
    { name: "orange", bgColor: "bg-orange-500", value: "#f97316" },
    { name: "pink", bgColor: "bg-pink-300", value: "#f9a8d4" },
    { name: "coral", bgColor: "bg-red-400", value: "#f87171" },
    { name: "gray", bgColor: "bg-gray-400", value: "#9ca3af" },
    { name: "mint", bgColor: "bg-green-200", value: "#bbf7d0" },
  ];

  return (
    <div className="w-full  bg-white mt-10">
      <div
        className="flex items-center justify-between cursor-pointer py-4 "
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-lg font-semibold text-gray-900 tracking-wide">
          COLOR
        </h3>
        {/* <svg 
          className={`w-5 h-5 mr-10 text-gray-600 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg> */}
        <IoIosArrowUp
          className={`text-xl text-mainColor mr-10 ${
            isExpanded ? "rotate-180" : ""
          } `}
        />
      </div>

      {isExpanded && (
        <div className="pb-6 mt-2 mr-10">
          <div className="grid grid-cols-5 gap-3">
            {colors.map((color) => (
              <button
                key={color.name}
                className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${
                  selectedColor === color.name
                    ? "border-gray-800 border-2"
                    : "border-gray-200 hover:border-gray-400"
                } ${color.bgColor}`}
                onClick={() => setSelectedColor(color.name)}
                aria-label={`Select ${color.name} color`} 
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopProductColor;
