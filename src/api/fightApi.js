import apiClient from "./apiClient";

// Simulate a fight
export const simulateFight = async (fighter1Id, fighter2Id) => {
    const { data } = await apiClient.post("/fights/simulate", { fighter1Id, fighter2Id });
    return data;
};

// Fetch fight history
export const getFightHistory = async () => {
    const { data } = await apiClient.get("/fights/history");
    return data;
};
