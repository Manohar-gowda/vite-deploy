// src/api/axios.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://vite-deploy-lj49.onrender.com', // Update this with your JSON server's URL
});

export default api;
