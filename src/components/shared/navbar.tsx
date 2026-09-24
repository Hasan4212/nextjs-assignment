
import React from "react"; 
import logo from "@/assets/logo.png"; 
import Image from "next/image"; 
 
const Navbar = () => { 
  return ( 
    <nav className="min-h-14    flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 md:px-8 py-2"> 
 
      {/* Logo */} 
      <div className="flex items-center gap-2"> 
        <Image src={logo} alt="Fitlog Logo" width={32} height={32} /> 
 
        <h1 className="text-white font-bold text-lg"> 
          FITLOG 
        </h1> 
      </div> 
 
      {/* Middle Buttons */} 
      <div className="flex items-center gap-3 sm:gap-6 text-sm"> 
 
        <button className="bg-lime-900 text-lime-400 px-3 sm:px-4 py-1.5 rounded-full"> 
          Workouts 
        </button> 
 
        <button className="text-gray-400 hover:text-white"> 
          My Plan 
        </button> 
 
      </div> 
 
      {/* Right Side */} 
      <div className="flex items-center gap-2 sm:gap-3 text-sm"> 
 
        <button className="text-gray-400 hover:text-white"> 
          Plan 
        </button> 
 
        <span className="bg-lime-400 text-black px-2 py-0.5 rounded-full text-xs"> 
          0 
        </span> 
 
        <span className="text-gray-400"> 
          Saved 
        </span> 
 
        <span className="border border-gray-700 text-gray-400 px-2 py-0.5 rounded-full text-xs"> 
          0 
        </span> 
 
      </div> 
 
    </nav> 
  ); 
}; 
 
export default Navbar;

