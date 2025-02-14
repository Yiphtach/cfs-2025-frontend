import { useEffect, useState } from "react";
import { getLeaderboard } from "../api/leaderboardApi";

const Leaderboard = () => {
    const [leaderboard, setLeaderboard] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchLeaderboard();
    }, []);

    const fetchLeaderboard = async () => {
        setError("");
        setIsLoading(true);
        try {
            const data = await getLeaderboard();
            setLeaderboard(data);
        } catch (error) {
            setError("Failed to load leaderboard. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const getRankIcon = (rank) => {
        if (rank === 1) return "🥇";
        if (rank === 2) return "🥈";
        if (rank === 3) return "🥉";
        return rank;
    };

    return (
        <div className="leaderboard-container">
            <h1>Leaderboard</h1>

            {error && <p className="error-message">{error}</p>}
            {isLoading ? (
                <p>Loading leaderboard...</p>
            ) : leaderboard.length === 0 ? (
                <p>No players have gained XP yet.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Username</th>
                            <th>XP</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaderboard.map((user, index) => (
                            <tr key={user.id}>
                                <td>{getRankIcon(index + 1)}</td>
                                <td>{user.username}</td>
                                <td>{user.xp}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Leaderboard;