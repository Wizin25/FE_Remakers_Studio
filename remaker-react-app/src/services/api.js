const API_URL = 'http://157.66.27.96:8080/api';

export const api = {
  get: async (endpoint) => {
    try {
      const response = await fetch(`${API_URL}${endpoint}`);
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      return response.json();
    } catch (error) {
      console.error("GET request failed:", error);
      return { error: error.message };
    }
  },

  post: async (endpoint, data) => {
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      return response.json();
    } catch (error) {
      console.error("POST request failed:", error);
      return { error: error.message };
    }
  }
};

// Gọi API đăng ký người dùng
export const registerUser = async (userData) => {
  return api.post('/Authentication/register', userData);
};

// Gọi API đăng nhập người dùng
export const loginUser = async (credentials) => {
  return api.post('/Authentication/login', credentials);
};
