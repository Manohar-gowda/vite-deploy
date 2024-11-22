import React, { useEffect, useState } from 'react'
import { fetchUsers } from '../Actions/Actions';

const DisplayUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers(setUsers);
  }, [])
  return (
    <div className="flex items-center justify-center text-2xl h-[75%] rounded-xl">
        <div className="p-8 shadow-lg container border items-center bg-gray-600 m-4 w-[85%] h-[85%] rounded-lg text-white text-center space-y-5">
          <div>
            <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-lg text-black">
              <h2 className="text-3xl font-bold mb-3 text-center">Users</h2>
              <table className="w-full border-collapse text-left overflow-hidden shadow-md ">
                <thead>
                  <tr className="bg-gray-600 text-white text-2xl">
                    <th className="border border-blue-700 px-4 py-2 font-semibold">
                      Name
                    </th>
                    <th className="border border-blue-700 px-4 py-2 font-semibold">
                      Email
                    </th>
                    <th className="border border-blue-700 px-4 py-2 font-semibold">
                      Role
                    </th>
                    <th className="border border-blue-700 px-4 py-2 font-semibold">
                      Status
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
                        {user.email}
                      </td>
                      <td className="border border-blue-300 px-4 py-2">
                        {user.role}
                      </td>
                      <td className="border border-blue-300 px-4 py-2">
                        {user.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
  )
}

export default DisplayUsers