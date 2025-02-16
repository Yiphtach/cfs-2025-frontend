import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getFighterById } from "../../api/fighterApi"; // Ensure this API call exists

const FighterCard = ({ fighterId }) => {
    const [fighter, setFighter] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFighter = async () => {
            try {
                const data = await getFighterById(fighterId);
                setFighter(data);
            } catch (error) {
                console.error("Error fetching fighter details:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchFighter();
    }, [fighterId]);

    if (loading) {
        return <div className="border rounded-lg p-4 shadow-lg bg-gray-700 text-white">Loading...</div>;
    }

    if (!fighter || !fighter.id || !fighter.image?.url) {
        return <div className="border rounded-lg p-4 shadow-lg bg-gray-700 text-white">Fighter not found</div>;
    }

    return (
        <div className="border rounded-lg p-4 shadow-lg">
            <img 
                src={fighter.image.url} 
                alt={fighter.name} 
                className="w-full h-40 object-cover rounded-md"
                onError={(e) => { e.target.src = '/fallback-image.png'; }} // Handle broken images
            />
            <h3 className="text-xl font-bold">{fighter.name}</h3>
            <Link to={`/id/${fighter.id}`} className="text-blue-500 hover:underline">
                View Details
            </Link>
        </div>
    );
};

// PropTypes validation
FighterCard.propTypes = {
    fighterId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default FighterCard;
