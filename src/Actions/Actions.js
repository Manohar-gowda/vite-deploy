import axios from "axios";

export const fetchUsers = async (setUsers) => {
    const res = await axios.get("http://localhost:3001/users");
    setUsers(res.data);
  };

  export const fetchRoles = async (setRoles) => {
    const res = await axios.get("http://localhost:3001/roles");
    setRoles(res.data);
  };

  export const handleAddUser = async (setSuccessMessage, newUser, setNewUser) => {
    await axios.post("http://localhost:3001/users", newUser);
    setSuccessMessage("User added successfully!");
    setNewUser({ name: "", email: "", role: "", status: "Active" });
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  export const handleDeleteUser = async (id) => {
    await axios.delete(`http://localhost:3001/users/${id}`);
    window.location.reload();
  };

  export const handleUpdateUser = async (setSuccessMessage, userId, updatedUser) => {
    try {
      await axios.put(`http://localhost:3001/users/${userId}`, updatedUser);
      setSuccessMessage("User updated successfully!");
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  export const fetchUserById = async (id, setSelectedUser) => {
    try {
      const res = await axios.get(`http://localhost:3001/users/${id}`);
      setSelectedUser(res.data);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  