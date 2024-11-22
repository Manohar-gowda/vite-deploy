import React, { useState, useEffect } from 'react';

import AddRole from './AddRole';
import EditRole from './EditRole';
import api from '../Actions/api';


const ManageRoles = () => {
  const [roles, setRoles] = useState([]);
  const [editingRoleId, setEditingRoleId] = useState(null);

  const fetchRoles = async () => {
    try {
      const response = await api.get('/roles');
      setRoles(response.data);
    } catch (error) {
      console.error('Error fetching roles:', error);
    }
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Roles Manager</h2>
      <AddRole onSuccess={fetchRoles} />
      {editingRoleId && (
        <EditRole roleId={editingRoleId} onSuccess={() => {
          fetchRoles();
          setEditingRoleId(null);
        }} />
      )}
      <h3 className="text-xl font-bold mt-8 mb-4">Roles List</h3>
      <ul className="space-y-4">
        {roles.map((role) => (
          <li
            key={role.id}
            className="p-4 bg-white shadow rounded flex justify-between items-center"
          >
            <div>
              <strong>{role.name}</strong> - {role.permissions.join(', ')}
            </div>
            <button
              onClick={() => setEditingRoleId(role.id)}
              className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageRoles;
