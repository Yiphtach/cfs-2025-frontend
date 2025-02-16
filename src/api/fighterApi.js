import apiClient from "./apiClient";

// Fetch all superheroes by search name
export const searchFighterByName = async (name) => {
    const { data } = await apiClient.get(`/search/${name}`);
    return data.results || [];
};

// Fetch superhero details by ID
export const getFighterById = async (id) => {
    try {
        const { data } = await apiClient.get(`/id/${id}`);
        return data;
    } catch (error) {
        console.error("Error fetching fighter details:", error);
        throw error;
    }
};
