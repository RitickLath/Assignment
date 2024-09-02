import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-white text-2xl font-bold hover:text-gray-200"
        >
          BlogPlatform
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-200">
            Home
          </Link>
          <Link to="/create" className="text-white hover:text-gray-200">
            Create Blog
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
