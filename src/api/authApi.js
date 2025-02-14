import axios from './apiClient';  // Axios instance for consistent API calls

// Register a new user
export const registerUser = async (userData) => {
    try {
        const response = await axios.post('/api/auth/register', userData);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'Registration failed' };
    }
};

// Login user
export const loginUser = async (credentials) => {
    try {
        const response = await axios.post('/api/auth/login', credentials);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'Login failed' };
    }
};

// Fetch authenticated user details
export const getUserProfile = async (token) => {
    try {
        const response = await axios.get('/api/auth/user', {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'Failed to fetch user' };
    }
};
