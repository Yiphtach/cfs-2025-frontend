import apiClient from './apiClient';  // Axios instance for consistent API calls

// Register a new user
export const registerUser = async (userData) => {
    try {
        const response = await apiClient.post('/auth/register', userData);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'Registration failed' };
    }
};

// Login user
export const loginUser = async (credentials) => {
    try {
        const response = await apiClient.post('/auth/login', credentials);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'Login failed' };
    }
};

// Fetch authenticated user details
export const getUserProfile = async () => {
    try {
        const response = await apiClient.get('/auth/user');
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'Failed to fetch user' };
    }
};