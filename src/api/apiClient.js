import axios from "axios";

// Base URL for the backend API (NOT the Superhero API directly)
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

// Create Axios instance
const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// Fetch character details by ID (from backend)
export const fetchCharacterById = async (characterId) => {
    try {
        const response = await apiClient.get(`/id/${characterId}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'Failed to fetch character' };
    }
};

// Fetch character power stats
export const fetchPowerStats = async (characterId) => {
    try {
        const response = await apiClient.get(`/id/${characterId}/powerstats`);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'Failed to fetch power stats' };
    }
};

// Fetch character biography
export const fetchBiography = async (characterId) => {
    try {
        const response = await apiClient.get(`/id/${characterId}/biography`);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'Failed to fetch biography' };
    }
};

// Fetch character appearance
export const fetchAppearance = async (characterId) => {
    try {
        const response = await apiClient.get(`/id/${characterId}/appearance`);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'Failed to fetch appearance' };
    }
};

// Fetch character work details
export const fetchWork = async (characterId) => {
    try {
        const response = await apiClient.get(`/id/${characterId}/work`);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'Failed to fetch work details' };
    }
};

// Fetch character connections
export const fetchConnections = async (characterId) => {
    try {
        const response = await apiClient.get(`/id/${characterId}/connections`);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'Failed to fetch connections' };
    }
};

// Fetch character image
export const fetchImage = async (characterId) => {
    try {
        const response = await apiClient.get(`/id/${characterId}/image`);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'Failed to fetch image' };
    }
};

// Search for characters by name
export const searchCharacterByName = async (name) => {
    try {
        const response = await apiClient.get(`/search/${name}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'Failed to search character' };
    }
};

// Get user settings
export const getUserSettings = async () => {
    const response = await apiClient.get("/settings");
    return response.data;
};

// Update user settings
export const updateUserSettings = async (settings) => {
    const response = await apiClient.put("/settings", settings);
    return response.data;
};

// Get user profile
export const getUserProfile = async () => {
    const response = await apiClient.get("/profile");
    return response.data;
};

// Get fighter by ID
export const getFighterById = async (id) => {
    const { data } = await apiClient.get(`/id/${id}`);
    return data;
};

// Export API Client
export default { apiClient };
// In this example, we have created an API client using Axios to make HTTP requests to the backend API. We have defined several functions to fetch character details, search for characters by name, and get user settings and profile. We have also exported the API client instance to be used in other parts of the application.