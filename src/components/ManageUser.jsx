import React, { useEffect, useState } from "react";
import EditModal from "./EditModal";
import { fetchRoles, fetchUserById, fetchUsers, handleDeleteUser } from "../Actions/Actions";

const ManageUser = () => {
  const [isModalOpen, setIsModalOpen] = useState();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [selectedUser, setSelectedUser] = useState()

  const handleEditPermi = (id) => {
    fetchUserById(id, setSelectedUser)
    console.log(selectedUser);
    
    openModal();
  }

  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  useEffect(() => {
    fetchUsers(setUsers);
    fetchRoles(setRoles);
  }, []);

  return (
    <div>
      <div className="flex items-center justify-center text-2xl h-[75%] rounded-xl">
        <div className="p-8 shadow-lg container border items-center bg-gray-600 m-4 w-[85%] h-[85%] rounded-lg text-white text-center space-y-5">
          <div>
            <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-lg text-black">
              <h2 className="text-3xl font-bold mb-3 text-center">Edit Users</h2>
              <table className="w-full border-collapse text-left overflow-hidden shadow-md ">
                <thead>
                  <tr className="bg-gray-600 text-white text-2xl">
                    <th className="border border-blue-700 px-4 py-2 font-semibold">
                      Name
                    </th>
                    <th className="border border-blue-700 px-4 py-2 font-semibold">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-blue-200 text-2xl">
                  {users.map((user, index) => (
                    <tr
                      key={user.id}
                      className={`${
                        index % 2 === 0 ? "bg-blue-50" : "bg-blue-100"
                      } hover:bg-blue-200 transition-colors duration-200`}
                    >
                      <td className="border border-blue-300 px-4 py-2">
                        {user.name}
                      </td>
                      <td className="border border-blue-300 px-4 py-2">
                        <div className="flex space-x-8 ">
                            <button className="bg-gray-700 text-white py-2 px-4 rounded" onClick={() => handleEditPermi(user.id)}>  Edit  </button>
                            <button className="bg-gray-700 text-white py-2 px-4 rounded" onClick={() => handleDeleteUser(user.id)}>Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <EditModal isOpen={isModalOpen} onClose={closeModal} user={selectedUser}/>
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
