import apiClient from './apiClient'; // Using configured Axios instance

// Get all leaderboard entries
export const getLeaderboard = async () => {
    try {
        const response = await apiClient.get('/leaderboard');
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'Failed to fetch leaderboard' };
    }
};

// Get top N players
export const getTopPlayers = async (limit = 10) => {
    try {
        const response = await apiClient.get(`/leaderboard/top/${limit}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'Failed to fetch top players' };
    }
};
