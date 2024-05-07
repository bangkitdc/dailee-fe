import axios from "axios";

export const url = import.meta.env.VITE_API_BASE_URL;
export const api = axios.create({
  baseURL: url,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const support = () => {
  const apiUrl = {
    auth: {
      login: "/login",
      register: "/register",
      refreshToken: "/refresh-token",
      logout: "/logout",
    },
    
    user: {
      self: "/self",
    }
  };

  return { apiUrl };
};

