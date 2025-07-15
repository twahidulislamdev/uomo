import React from 'react'

const Button = () => {
  return (
   <>
    <button className="relative px-6 py-3 text-gray-700 text-lg font-medium group ml-10">
      {/* Button text */}
      <span className="group-hover:text-blue-500 transition-colors duration-300">
        Hover Me
      </span>
      
      {/* Bottom border - starts at half width */}
      <span className="absolute bottom-0 left-1/2 h-0.5 bg-blue-500 transform -translate-x-1/2 
                      w-0 group-hover:w-full group-hover:left-0 group-hover:translate-x-0 
                      transition-all duration-300 ease-in-out">
      </span>
    </button>

     <ul className="flex gap-6 ">
      <li className="relative list-none px-3 py-2 font-medium text-black cursor-pointer group">
        Menu Item
        <span className=" absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0 group-hover:translate-x-0"></span>
      </li>
    </ul>
   </>
  )
}

export default Button