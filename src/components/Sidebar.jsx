import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // Import hamburger and close icons

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative h-screen">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-4 left-4 z-50 text-gray-900 bg-gray-200 p-2 rounded-md shadow hover:bg-gray-300 transition-all"
      >
        {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white shadow-xl transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <h2 className="text-2xl font-bold p-4">Sidebar</h2>
        <ul className="mt-4 space-y-2">
          <li className="px-4 py-2 hover:bg-gray-800 rounded-lg cursor-pointer">Home</li>
          <li className="px-4 py-2 hover:bg-gray-800 rounded-lg cursor-pointer">About</li>
          <li className="px-4 py-2 hover:bg-gray-800 rounded-lg cursor-pointer">Services</li>
          <li className="px-4 py-2 hover:bg-gray-800 rounded-lg cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
