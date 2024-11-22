import axios from "axios";
import api from "./api";

export const fetchUsers = async (setUsers) => {
    const res = await api.get("/users");
    setUsers(res.data);
  };

  export const fetchRoles = async (setRoles) => {
    const res = await api.get("/roles");
    setRoles(res.data);
  };

  export const handleAddUser = async (setSuccessMessage, newUser, setNewUser) => {
    await api.post("/users", newUser);
    setSuccessMessage("User added successfully!");
    setNewUser({ name: "", email: "", role: "", status: "Active" });
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  export const handleDeleteUser = async (id) => {
    await api.delete(`/users/${id}`);
    window.location.reload();
  };

  export const handleUpdateUser = async (setSuccessMessage, userId, updatedUser) => {
    try {
      await api.put(`/users/${userId}`, updatedUser);
      setSuccessMessage("User updated successfully!");
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  export const fetchUserById = async (id, setSelectedUser) => {
    try {
      const res = await api.get(`/users/${id}`);
      setSelectedUser(res.data);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  