import { useState } from "react";
import PropTypes from 'prop-types';
import { simulateFight } from "../../api/fightApi";

const FightPanel = ({ fighter1, fighter2 }) => {
    const [winner, setWinner] = useState(null);

    const handleFight = async () => {
        const result = await simulateFight(fighter1.id, fighter2.id);
        setWinner(result.winner);
    };

    return (
        <div>
            <h2>Fight!</h2>
            <button onClick={handleFight} className="bg-red-500 text-white px-4 py-2">Start Fight</button>
            {winner && <h3>Winner: {winner}</h3>}
        </div>
    );
};
FightPanel.propTypes = {
    fighter1: PropTypes.shape({
        id: PropTypes.number.isRequired
    }).isRequired,
    fighter2: PropTypes.shape({
        id: PropTypes.number.isRequired
    }).isRequired
};

export default FightPanel;