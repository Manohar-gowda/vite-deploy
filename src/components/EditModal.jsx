import React from 'react'
import { useState, useEffect } from "react";
import { fetchRoles, fetchUsers, handleUpdateUser} from '../Actions/Actions';

const EditModal = ({isOpen, onClose, user}) => {
    const handleOverlayClick = (e) => { 
        if (e.target === e.currentTarget) { 
          onClose();
        } 
      };
      const [successMessage, setSuccessMessage] = useState(""); 

      const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        role: "",
      });

    useEffect(() => {
      if (user) {
        setNewUser({
          name: user.name || "",
          email: user.email || "",
          role: user.role || "",
        });
      }
    }, [user]);
    

    const handleChange = (e) => {
      const { name, value } = e.target;
      setNewUser((prev) => ({
        ...prev,
        [name]: value,
      }));
    };
  

    if (!isOpen) return null;
  
    
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50 no-scrollbar overflow-y-scroll overflow-x-hidden " onClick={handleOverlayClick}>
      <div className="bg-white p-6 rounded-lg shadow-lg w-[65%]">
       
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-slate-700 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Close
          </button>
          <div>
          <div className="p-5 bg-white rounded shadow text-black">
          {successMessage && (
        <div className="mt-4 text-green-600 font-bold">
          {successMessage}
        </div>
      )}
          <h2 className="text-3xl font-bold mb-3">Edit User</h2>
      <div className="mb-5"> 
        <input 
          type="text" 
          name="name" 
          value={newUser.name} 
          onChange={handleChange}
          className="border px-2 py-1 rounded mr-2" 
        /> 
        <input
          type="email"
          name = "email"
          value={newUser.email} 
          onChange={handleChange} 
          className="border px-2 py-1 rounded mr-2"
        /> 
        <select
          value={newUser.role}
          name="role"
          onChange={handleChange}
          className="border px-2 py-1 rounded mr-2"
        >
          <option value="">Select Role</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
          <option value="Editor">Editor</option>
          
        </select>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleUpdateUser(setSuccessMessage,user?.id, newUser);
          }}
          className="bg-gray-600 text-white px-3 py-1 rounded"
        >
          Save Changes
        </button>    
      </div>
    </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditModal