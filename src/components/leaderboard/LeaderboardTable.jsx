import PropTypes from "prop-types";

const LeaderboardTable = ({ leaderboardData = [] }) => {
    const getRankIcon = (rank) => {
        if (rank === 1) return "🥇";
        if (rank === 2) return "🥈";
        if (rank === 3) return "🥉";
        return rank;
    };

    return (
        <div className="w-full">
            <table className="w-full border-collapse border border-gray-700">
                <thead className="bg-red-600 text-white">
                    <tr>
                        <th className="p-2 border border-gray-700">Rank</th>
                        <th className="p-2 border border-gray-700">Username</th>
                        <th className="p-2 border border-gray-700">XP</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboardData.map((user, index) => (
                        <tr key={user.id} className="odd:bg-gray-800 even:bg-gray-700 text-center">
                            <td className="p-2 border border-gray-700">{getRankIcon(index + 1)}</td>
                            <td className="p-2 border border-gray-700">{user.username || "Unknown"}</td>
                            <td className="p-2 border border-gray-700">{user.xp.toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

// PropTypes validation
LeaderboardTable.propTypes = {
    leaderboardData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            username: PropTypes.string.isRequired,
            xp: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default LeaderboardTable;
