import { useEffect, useState } from "react";
import { getUserProfile } from "../api/apiClient";

const Profile = () => {
    const [user, setUser] = useState(null);
    const [fightHistory, setFightHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchUserProfile();
    }, []);

    const fetchUserProfile = async () => {
        setError("");
        setIsLoading(true);
        try {
            const data = await getUserProfile();
            setUser(data.user);
            setFightHistory(data.fights);
        } catch (error) {
            setError(`Failed to load profile: ${error.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    const getProgressPercentage = () => {
        return (user?.xp % 100) || 0;
    };

    return (
        <div className="profile-container">
            <h1>Profile</h1>

            {error && <p className="error-message">{error}</p>}
            {isLoading ? (
                <p>Loading profile...</p>
            ) : user ? (
                <>
                    <h2>{user.username}&apos;s Profile</h2>
                    <p>Email: {user.email}</p>

                    <div className="xp-bar">
                        <progress value={getProgressPercentage()} max="100"></progress>
                        <p>XP: {user.xp} (Rank {user.rank})</p>
                    </div>

                    <h2>Fight History</h2>
                    {fightHistory.length === 0 ? (
                        <p>No fights recorded yet.</p>
                    ) : (
                        <ul>
                            {fightHistory.map((fight) => (
                                <li key={fight.id}>
                                    {fight.fighter1} vs {fight.fighter2} - Winner: {fight.winner}
                                </li>
                            ))}
                        </ul>
                    )}
                </>
            ) : (
                <p>User profile not found.</p>
            )}
        </div>
    );
};

export default Profile;
