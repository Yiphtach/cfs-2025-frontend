import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import punchSound from "../assets/punch.mp3";

const defaultImage = "https://via.placeholder.com/150?text=No+Image";

const FightPanel = ({ fighter1, fighter2, fightSequence, winner }) => {
    const [displayedSequence, setDisplayedSequence] = useState([]);

    const playSound = () => {
        const audio = new Audio(punchSound);
        audio.play();
    };

    useEffect(() => {
        setDisplayedSequence([]);
        fightSequence.forEach((event, index) => {
            setTimeout(() => {
                setDisplayedSequence((prev) => [...prev, event]);
                playSound();
            }, index * 1000);
        });
    }, [fightSequence]);

    return (
        <div className="fight-panel">
            <div className="fight-panel-row">
                <div className="fighter">
                    <img src={fighter1.image || defaultImage} alt={fighter1.name} />
                    <h3>{fighter1.name}</h3>
                </div>
                <div className="vs">VS</div>
                <div className="fighter">
                    <img src={fighter2.image || defaultImage} alt={fighter2.name} />
                    <h3>{fighter2.name}</h3>
                </div>
            </div>

            <div className="fight-sequence">
                {displayedSequence.map((event, index) => (
                    <p key={index}>{event}</p>
                ))}
            </div>

            {winner && (
                <div className="winner">
                    <h2>🏆 Winner: {winner} 🏆</h2>
                </div>
            )}
        </div>
    );
};
FightPanel.propTypes = {
    fighter1: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string
    }).isRequired,
    fighter2: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string
    }).isRequired,
    fightSequence: PropTypes.arrayOf(PropTypes.string).isRequired,
    winner: PropTypes.string
};


export default FightPanel;
