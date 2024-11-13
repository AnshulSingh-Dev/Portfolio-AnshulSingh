import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // Import hamburger and close icons
import { FaGithub, FaLinkedin, FaSearch } from "react-icons/fa";

function Header2(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="Header2">
            <div className="bg-gradient-to-r from-black via-gray-900 to-gray-800 h-20 flex items-center justify-between shadow-md px-16">
                <h1 className="text-white text-3xl font-bold hover:text-indigo-600 transition-colors duration-300">
                    Portfolio
                </h1>
            <div className="flex items-center space-x-4">
            <input
      type="text"
      placeholder="Enter data to search"
      className="w-80 p-2 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
    <button
      className="px-4 py-2 rounded-3xl bg-white text-black hover:bg-indigo-600 hover:text-white hover:scale-105 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer font-bold flex items-center justify-center"
    >
      <FaSearch />
    </button>
            </div>
        </div>

        {/*Sidebar*/}

        <div className="sidebar">
        <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-5 left-4 z-50 text-gray-900 bg-gray-200 p-2 rounded-md shadow hover:bg-gray-300 transition-all"
      >
        {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
      </button>
      

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white shadow-xl transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <h2 className="text-2xl font-bold p-4"></h2>
        <ul className="mt-4 space-y-2 py-7">
          <li className="px-4 py-2 hover:bg-indigo-600 rounded-lg cursor-pointer m-1">Home</li>
          <li className="px-4 py-2 hover:bg-indigo-600 rounded-lg cursor-pointer m-1">About</li>
          <li className="px-4 py-2 hover:bg-indigo-600 rounded-lg cursor-pointer m-1">Services</li>
          <li className="px-4 py-2 hover:bg-indigo-600 rounded-lg cursor-pointer m-1">Contact</li>
          <li className="px-4 py-2 m-1 rounded-lg bg-white text-black hover:bg-black hover:text-white hover:scale- shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer flex items-center justify-center">
            <FaGithub size={24} />
          </li>
          <li className="px-4 py-2 m-1 rounded-lg bg-white text-black hover:bg-blue-600 hover:text-white hover:scale-80 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer flex items-center justify-center">
            <FaLinkedin size={24} />
          </li>
        </ul>
      </div>
      </div>
        </div>    
    )
}

export default Header2; 