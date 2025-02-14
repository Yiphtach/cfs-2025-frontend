import apiClient from './apiClient'; // Using configured Axios instance

// Fetch user profile
export const getUserProfile = async () => {
    try {
        const response = await apiClient.get('/profile');
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'Failed to fetch profile' };
    }
};

// Get user settings
export const getUserSettings = async () => {
    try {
        const response = await apiClient.get('/profile/settings');
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'Failed to fetch user settings' };
    }
};

// Update user profile
export const updateProfile = async (profileData) => {
    try {
        const response = await apiClient.put('/profile', profileData);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'Failed to update profile' };
    }
};

// Update user settings (fixing the missing export)
export const updateUserSettings = async (settingsData) => {
    try {
        const response = await apiClient.put('/profile/settings', settingsData);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'Failed to update user settings' };
    }
};