import { FaTwitter, FaFacebookF, FaInstagram, FaReddit } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 py-6">
      <div className="container mx-auto text-center">
        {/* Footer Title */}
        <h2 className="text-white text-xl font-semibold mb-4">Connect with Me</h2>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://x.com/anshulsingh0519"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-blue-400 transition-colors duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-blue-600 transition-colors duration-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/anshul.singh.official/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-pink-500 transition-colors duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://reddit.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-orange-500 transition-colors duration-300"
          >
            <FaReddit />
          </a>
        </div>

        {/* Footer Description */}
        <p className="text-gray-400 mt-4">
          &copy; {new Date().getFullYear()} Anshul Singh. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
