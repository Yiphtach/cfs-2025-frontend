import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const FighterCard = ({ fighter }) => {
    // Handle cases where fighter is undefined or missing properties
    if (!fighter || !fighter.image || !fighter.image.url) {
        return <div className="border rounded-lg p-4 shadow-lg bg-gray-700 text-white">Loading...</div>;
    }

    return (
        <div className="border rounded-lg p-4 shadow-lg">
            <img 
                src={fighter.image.url} 
                alt={fighter.name} 
                className="w-full h-40 object-cover rounded-md"
                onError={(e) => { e.target.src = '/fallback-image.png'; }} // Handles broken images
            />
            <h3 className="text-xl font-bold">{fighter.name}</h3>
            <Link to={`/fighters/${fighter.id}`} className="text-blue-500 hover:underline">
                View Details
            </Link>
        </div>
    );
};

// PropTypes validation
FighterCard.propTypes = {
    fighter: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Fix type mismatch
        name: PropTypes.string.isRequired,
        image: PropTypes.shape({
            url: PropTypes.string.isRequired
        })
    })
};

export default FighterCard;
