import React, { useState } from 'react';
import api from '../Actions/api';

const AddRole = ({ onSuccess }) => {
  const [roleName, setRoleName] = useState('');
  const [permissions, setPermissions] = useState([]);

  const availablePermissions = ['Read', 'Write', 'Delete'];

  const handlePermissionChange = (perm) => {
    setPermissions((prev) =>
      prev.includes(perm) ? prev.filter((p) => p !== perm) : [...prev, perm]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newRole = { name: roleName, permissions };
      await api.post('/roles', newRole);
      onSuccess(); // Refresh the roles list after successful addition
      setRoleName('');
      setPermissions([]);
    } catch (error) {
      console.error('Error adding role:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow rounded">
      <h3 className="text-lg font-bold mb-4">Add Role</h3>
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
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Add Role
      </button>
    </form>
  );
};

export default AddRole;
