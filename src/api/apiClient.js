import apiClient from './apiClient';

const API_BASE_URL = 'https://superheroapi.com/api/e25a217cfe9babe1aae8ed7cd83112eb';

// Fetch superhero details by ID
export const fetchCharacterById = async (characterId) => {
    try {
        const response = await apiClient.get(`${API_BASE_URL}/${characterId}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'Failed to fetch character' };
    }
};

// Fetch superhero power stats
export const fetchPowerStats = async (characterId) => {
    try {
        const response = await apiClient.get(`${API_BASE_URL}/${characterId}/powerstats`);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'Failed to fetch power stats' };
    }
};

// Fetch superhero biography
export const fetchBiography = async (characterId) => {
    try {
        const response = await apiClient.get(`${API_BASE_URL}/${characterId}/biography`);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'Failed to fetch biography' };
    }
};

// Fetch superhero appearance details
export const fetchAppearance = async (characterId) => {
    try {
        const response = await apiClient.get(`${API_BASE_URL}/${characterId}/appearance`);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'Failed to fetch appearance' };
    }
};

// Fetch superhero work details
export const fetchWork = async (characterId) => {
    try {
        const response = await apiClient.get(`${API_BASE_URL}/${characterId}/work`);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'Failed to fetch work details' };
    }
};

// Fetch superhero connections
export const fetchConnections = async (characterId) => {
    try {
        const response = await apiClient.get(`${API_BASE_URL}/${characterId}/connections`);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'Failed to fetch connections' };
    }
};

// Fetch superhero image
export const fetchImage = async (characterId) => {
    try {
        const response = await apiClient.get(`${API_BASE_URL}/${characterId}/image`);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'Failed to fetch image' };
    }
};

// Search for superheroes by name
export const searchCharacterByName = async (name) => {
    try {
        const response = await apiClient.get(`${API_BASE_URL}/search/${name}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'Failed to search character' };
    }
};

export const getUserSettings = async () => {}

export const updateUserSettings = async () => {}

export const getLeaderboard = async () => {}

export const getUserProfile = async () => {}

export default {
    fetchCharacterById,
    fetchPowerStats,
    fetchBiography,
    fetchAppearance,
    fetchWork,
    fetchConnections,
    fetchImage,
    searchCharacterByName,
    getUserSettings,
    updateUserSettings,
    getLeaderboard,
    getUserProfile
};
