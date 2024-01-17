import React from 'react'
import Logo from "../images/logo.png";
function Navbar() {
  return (
    <nav className="bg-gray-100 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-black font-bold text-xl">
            <img src={Logo} alt="Image"/>  
        </div>

        {/* Navigation Links */}
        <div className="space-x-4 mr-2">
          <a href="/" className="text-black p-2">Home</a>
          <a href="/about" className="text-black p-2">About</a>
          <a href="/contact" className="text-black p-2">Contact</a>
          <a href="/login"><button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 p-2">Login</button></a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar