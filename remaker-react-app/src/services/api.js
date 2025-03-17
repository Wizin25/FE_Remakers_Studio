const API_URL = 'http://157.66.27.96:8080/api';

const getAuthHeaders = () => {
  const token = localStorage.getItem('token'); // Lấy token từ localStorage
  return token ? { 'Authorization': `Bearer ${token}` } : {}; // Thêm token nếu có
};

export const api = {
  get: async (endpoint) => {
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...getAuthHeaders() // Thêm token vào headers
        }
      });

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
          ...getAuthHeaders() // Thêm token vào headers
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

// API Đăng ký
export const registerUser = async (userData) => {
  return api.post('/Authentication/register', userData);
};

// API Đăng nhập
export const loginUser = async (credentials) => {
  return api.post('/Authentication/login', credentials);
};

// API Lấy thông tin người dùng
export const getUserInfo = async () => {
  return api.get('/Authentication/getMyInfo');
};

export const getProduct = async ()  => {
  return api.get('/Product?sortColumn=Name&sortDirection=Ascending&pageNumber=1&pageSize=10');
}
