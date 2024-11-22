// src/api/axios.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001', // Update this with your JSON server's URL
});

export default api;
