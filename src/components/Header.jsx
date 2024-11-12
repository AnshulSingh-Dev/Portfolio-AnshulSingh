import { FaGithub, FaLinkedin } from "react-icons/fa";
function Header(){
    return(
        <header className="bg-gradient-to-r from-black via-gray-900 to-gray-800 shadow-lg sticky top-0 z-50 flex ">
            <div className="container mx-auto px-4 h-16 flex items-center">
                <h1 className="text-white text-3xl font-bold hover:text-blue-600 transition-colors duration-300">Portfolio</h1>
            </div>
            <div className="navbar flex items-center">
        <ul className="nav-list flex px-1 m-1 space-x-4">
          <li className="px-4 py-2 m-1 rounded-lg bg-white text-black font-bold hover:bg-blue-600 hover:text-white hover:scale-105 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer">
            About
          </li>
          <li className="px-4 py-2 m-1 rounded-lg bg-white text-black font-bold hover:bg-blue-600 hover:text-white hover:scale-105 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer">
            TechStack
          </li>
          <li className="px-4 py-2 m-1 rounded-lg bg-white text-black font-bold hover:bg-blue-600 hover:text-white hover:scale-105 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer">
            Projects
          </li>
          <li className="px-4 py-2 m-1 rounded-lg bg-white text-black hover:bg-blue-600 hover:text-white hover:scale-105 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer flex items-center justify-center">
            <FaGithub size={24} />
          </li>
          <li className="px-4 py-2 m-1 rounded-lg bg-white text-black hover:bg-blue-600 hover:text-white hover:scale-105 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer flex items-center justify-center">
            <FaLinkedin size={24} />
          </li>
        </ul>
      </div>
        </header>
    )
}

export default Header;