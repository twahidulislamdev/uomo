import { useState } from "react";
import { ChevronDown } from "lucide-react";

const DefaultSorting = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    console.log(`Clicked: ${item}`);
    setIsOpen(false);
  };
  return (
    <>
      <div className="flex items-center justify-center ">
        <div className="relative">
          {/* Dropdown Button */}
          <button
            onClick={toggleDropdown}
            className="inline-flex items-center justify-center w-48 px-4 focus:outline-none focus:ring-offset-2 text-sm font-medium text-mainColor  transition-colors duration-200"
          >
            DEFAULT SORTING
            <ChevronDown
              className={`ml-2 h-5 w-5 text-  text-mainColor transition-transform duration-200 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute right-0 z-10 mt-2 w-45 origin-top-right  divide-y  rounded-md    ring-opacity-5 focus:outline-none shadow-2xl">
              <div className="py-1">
                <button
                  onClick={() => handleItemClick("Profile")}
                  className="flex items-center w-full px-4 py-2 text-sm hover:text-gray-900 transition-colors duration-150 hover:bg-gray-200"
                >
                  FEATURED
                </button>
                <button
                  onClick={() => handleItemClick("Settings")}
                  className="flex items-center w-full px-4 py-2 text-sm hover:text-gray-900 transition-colors duration-150 hover:bg-gray-200"
                >
                  BEST SELLING
                </button>
                <button
                  onClick={() => handleItemClick("Notifications")}
                  className="flex items-center w-full px-4 py-2 text-sm   hover:text-gray-900 transition-colors duration-150 hover:bg-gray-200"
                >
                  DATE, OLD TO NEW
                </button>
                <button
                  onClick={() => handleItemClick("Notifications")}
                  className="flex items-center w-full px-4 py-2 text-sm   hover:text-gray-900 transition-colors duration-150 hover:bg-gray-200"
                >
                  DATE, MEW TO OLD
                </button>
              </div>
            </div>
          )}

          {/* Backdrop to close dropdown when clicking outside */}
          {isOpen && (
            <div
              className="fixed inset-0 z-0"
              onClick={() => setIsOpen(false)}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default DefaultSorting;
