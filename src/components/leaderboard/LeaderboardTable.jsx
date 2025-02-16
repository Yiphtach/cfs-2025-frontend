import PropTypes from "prop-types";

const LeaderboardTable = ({ leaderboardData = [] }) => {
    return (
        <div className="w-full max-w-3xl mx-auto bg-gray-900 text-white p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center mb-4">Leaderboard</h2>
            {leaderboardData.length === 0 ? (
                <p className="text-center text-gray-400">No leaderboard data available.</p>
            ) : (
                <table className="w-full border-collapse border border-gray-700">
                    <thead className="bg-red-600 text-white">
                        <tr>
                            <th className="p-2 border border-gray-700">Rank</th>
                            <th className="p-2 border border-gray-700">Name</th>
                            <th className="p-2 border border-gray-700">Score</th>
                            <th className="p-2 border border-gray-700">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaderboardData.map((entry, index) => (
                            <tr key={entry.id || index} className="odd:bg-gray-800 even:bg-gray-700 text-center">
                                <td className="p-2 border border-gray-700">{index + 1}</td>
                                <td className="p-2 border border-gray-700">{entry.name || "Unknown"}</td>
                                <td className="p-2 border border-gray-700">{entry.score.toLocaleString()}</td>
                                <td className="p-2 border border-gray-700">{new Date(entry.time).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

// PropTypes validation
LeaderboardTable.propTypes = {
    leaderboardData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            name: PropTypes.string.isRequired,
            score: PropTypes.number.isRequired,
            time: PropTypes.string.isRequired,
        })
    ),
};

export default LeaderboardTable;
