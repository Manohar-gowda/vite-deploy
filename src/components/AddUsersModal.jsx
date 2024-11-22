import React, { useEffect, useState } from 'react'
import { fetchRoles, fetchUsers, handleAddUser } from '../Actions/Actions';

const AddUsers = ({isOpen, onClose}) => {
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      };

      const [successMessage, setSuccessMessage] = useState("");

    const [users, setUsers] = useState([]);
    const [roles, setRoles] = useState([]);
    const [newUser, setNewUser] = useState({ name: "", email: "", role: "", status: "Active" });
  
    useEffect(() => {
      fetchUsers(setUsers);
      fetchRoles(setRoles);
    }, []);

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
          <h2 className="text-3xl font-bold mb-3">Add User</h2>
      <div className="mb-5">
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          className="border px-2 py-1 rounded mr-2"
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          className="border px-2 py-1 rounded mr-2"
        />
        <select
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
          className="border px-2 py-1 rounded mr-2"
        >
          <option value="">Select Role</option>
          {roles.map((role) => (
            <option key={role.id} value={role.name}>
              {role.name}
            </option>
          ))}
        </select>
        <button
          onClick={() => handleAddUser(setSuccessMessage, newUser, setNewUser)}
          className="bg-gray-600 text-white px-3 py-1 rounded"
        >
          Add User
        </button>    
      </div>
    </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddUsers