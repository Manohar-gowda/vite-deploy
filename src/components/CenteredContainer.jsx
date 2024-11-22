import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import AddUsers from "./AddUsersModal";

const CenteredContainer = () => {
    const menuItems = ["Display Users", "Add User", "User Management", "Role Management"];
    const navigate = useNavigate();

    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    const handleClick = (item) => {
      if(item === "Display Users") {
        navigate("/users")
      }else if(item === "User Management") {
        navigate("/manage")
      }else if(item === "Role Management")  {
        navigate("/roles")
      } 
      else {
        openModal()
      }
    } 

  return ( 
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-700 to-gray-900">
  <div className="p-8 shadow-2xl container max-w-md justify-center items-center bg-gray-800 m-4 rounded-lg text-white text-center space-y-6">
    <h1 className="font-bold text-3xl p-4 bg-gray-900 rounded-lg shadow-md text-orange-500">
      Select Operations
    </h1>
    <ul className="list-none space-y-6">
      {menuItems.map((item) => (
        <li
          key={item}
          onClick={() => handleClick(item)}
          className="p-4 bg-gray-700 rounded-lg text-lg font-medium hover:bg-orange-500 hover:text-white hover:scale-105 shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
  <AddUsers isOpen={isModalOpen} onClose={closeModal} />
</div>

  ); 
}; 


export default CenteredContainer;
