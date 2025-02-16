import { useEffect, useState } from "react";
import { getLeaderboard } from "../api/apiClient";
import LeaderboardTable from "../components/leaderboard/LeaderboardTable";

const Leaderboard = () => {
    const [leaderboard, setLeaderboard] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchLeaderboard = async () => {
            setError("");
            setIsLoading(true);
            try {
                const data = await getLeaderboard();
                setLeaderboard(data);
            } catch (error) {
                setError(`Failed to load leaderboard: ${error.message}`);
            } finally {
                setIsLoading(false);
            }
        };

        fetchLeaderboard();
    }, []);

    return (
        <div className="max-w-4xl mx-auto bg-gray-900 text-white p-6 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-center mb-4">Leaderboard</h1>

            {error && <p className="text-red-500 text-center">{error}</p>}
            
            {isLoading ? (
                <p className="text-center text-gray-400">Loading leaderboard...</p>
            ) : leaderboard.length === 0 ? (
                <p className="text-center text-gray-400">No players have gained XP yet.</p>
            ) : (
                <LeaderboardTable leaderboardData={leaderboard} />
            )}
        </div>
    );
};

export default Leaderboard;
