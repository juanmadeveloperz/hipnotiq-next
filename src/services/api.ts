import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',  // Reemplaza con la URL de tu backend
});

export default api;
