import React from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../images/logovrv-.png'


const NavBar = () => {

  const navigate = useNavigate()

  return (
    <nav className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 p-4 shadow-md flex justify-between items-center relative">
  <div className="flex items-center space-x-3">
    <img
      src={img}
      alt="Icon"
      className="h-[5%] w-[5%] cursor-pointer hover:scale-110 transition-transform duration-300"
      onClick={() => navigate("/")}
    />
  </div>

  {/* Title Section */}
  <h1 className="text-2xl font-bold text-white absolute left-1/2 transform -translate-x-1/2">
    Admin Panel
  </h1>

  {/* Button Section */}
  <button
    className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-5 rounded-lg shadow-lg transition-all duration-300"
    onClick={() => navigate('/menu')}
  >
    Options
  </button>
</nav>

  );
};

export default NavBar;
