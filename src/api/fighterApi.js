import apiClient from "./apiClient";

// Fetch all superheroes by search name
export const searchFighterByName = async (name) => {
    const { data } = await apiClient.get(`/fighters/search/${name}`);
    return data.results || [];
};

// Fetch superhero details by ID
export const getFighterById = async (id) => {
    const { data } = await apiClient.get(`/fighters/${id}`);
    return data;
};
