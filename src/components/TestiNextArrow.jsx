import { IoIosArrowForward } from "react-icons/io";

const TestiNextArrow = ({onClick}) => {
  return (
    <div
      className={`absolute top-[40%] right-[50px] z-10 transform -translate-y-1/2 cursor-pointer w-10 h-10 rounded-[50%] border-2 border-gray-500 `}
      onClick={onClick}
    >
      <IoIosArrowForward className="text-4xl text-gray-500 bg-transparent rounded-full p-1 shadow" />
    </div>
  );
};

export default TestiNextArrow;
