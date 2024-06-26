import axios from 'axios';

const {VITE_BASE_URI_API} = import.meta.env
export const API_BASE_URL = `${VITE_BASE_URI_API}/api`;


export const loginAPI = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, {
      email: email,
      password: password,
    });
    return response.data;
  } catch (error) {
    throw new Error('Error al iniciar sesion');
  }
};

export const registerAPI = async (email, password, username, glb) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/register`, {
      email: email,
      password: password,
      username: username,
      glb: glb,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Error al registrar');
  }
};
