import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-purple-700 shadow-md">
      <div className="text-3xl font-extrabold text-white">
        <span style={{ fontFamily: 'Cursive, sans-serif' }}>&lt;MUSA /&gt;</span>
      </div>
      <div className="flex space-x-8 text-lg font-medium">
        < Link to="/" className="text-white hover:text-purple-300 transition duration-300">Home</Link>
        < Link to="auth" className="text-white hover:text-purple-300 transition duration-300">Auth</Link>
        < Link to="about" className="text-white hover:text-purple-300 transition duration-300">About Us</Link>
        < Link to="contact" className="text-white hover:text-purple-300 transition duration-300">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
