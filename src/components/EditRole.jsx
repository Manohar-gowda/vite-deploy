import React, { useState, useEffect } from 'react';
import api from '../Actions/api';

const EditRole = ({ roleId, onSuccess }) => {
  const [role, setRole] = useState(null);
  const [roleName, setRoleName] = useState('');
  const [permissions, setPermissions] = useState([]);

  const availablePermissions = ['Read', 'Write', 'Delete'];

  useEffect(() => {
    const fetchRole = async () => {
      try {
        const response = await api.get(`/roles/${roleId}`);
        setRole(response.data);
        setRoleName(response.data.name);
        setPermissions(response.data.permissions);
      } catch (error) {
        console.error('Error fetching role:', error);
      }
    };
    fetchRole();
  }, [roleId]);

  const handlePermissionChange = (perm) => {
    setPermissions((prev) =>
      prev.includes(perm) ? prev.filter((p) => p !== perm) : [...prev, perm]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedRole = { ...role, name: roleName, permissions };
      await api.put(`/roles/${roleId}`, updatedRole);
      onSuccess(); // Refresh the roles list after successful update
    } catch (error) {
      console.error('Error updating role:', error);
    }
  };

  if (!role) return <p>Loading...</p>;

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow rounded">
      <h3 className="text-lg font-bold mb-4">Edit Role</h3>
      <label className="block mb-2">
        Role Name:
        <input
          type="text"
          value={roleName}
          onChange={(e) => setRoleName(e.target.value)}
          required
          className="mt-1 p-2 border rounded w-full"
        />
      </label>
      <div>
        <h4 className="font-semibold mb-2">Permissions:</h4>
        <div className="flex gap-4">
          {availablePermissions.map((perm) => (
            <label key={perm} className="flex items-center">
              <input
                type="checkbox"
                checked={permissions.includes(perm)}
                onChange={() => handlePermissionChange(perm)}
                className="mr-2"
              />
              {perm}
            </label>
          ))}
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Update Role
      </button>
    </form>
  );
};

export default EditRole;
