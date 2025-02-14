import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const FighterCard = ({ fighter }) => {
    return (
        <div className="border rounded-lg p-4 shadow-lg">
            <img src={fighter.image.url} alt={fighter.name} className="w-full h-40 object-cover" />
            <h3 className="text-xl font-bold">{fighter.name}</h3>
            <Link to={`/fighters/${fighter.id}`} className="text-blue-500">View Details</Link>
        </div>
    );
};
FighterCard.propTypes = {
    fighter: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.shape({
            url: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
};

export default FighterCard;
