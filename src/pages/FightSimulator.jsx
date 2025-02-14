import { useState } from "react";
import { simulateFight } from "../api/fightApi";
import FighterCard from "../components/fighters/FighterCard";

const FightSimulator = () => {
    const [fighter1, setFighter1] = useState(null);
    const [fighter2, setFighter2] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [fightSequence, setFightSequence] = useState([]);
    const [winner, setWinner] = useState(null);

    const handleFight = async () => {
        if (!fighter1 || !fighter2) {
            setError("Please select two fighters before starting the fight.");
            return;
        }

        setError("");
        setIsLoading(true);
        setFightSequence([]);
        setWinner(null);

        try {
            const data = await simulateFight({ fighter1Id: fighter1.id, fighter2Id: fighter2.id });

            // Fake attack sequence before revealing winner
            setFightSequence([
                `${fighter1.name} throws a punch!`,
                `${fighter2.name} dodges and counters!`,
                `${fighter1.name} uses super strength!`,
                `${fighter2.name} blocks and fights back!`,
                `Final attack...`,
            ]);

            setTimeout(() => {
                setWinner(data.winner);
            }, 3000); // Simulate fight delay
        } catch (error) {
            setError("Fight simulation failed. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fight-simulator-container">
            <h1>Superhero Fight Simulator</h1>

            <div className="fighter-selection">
                <FighterCard fighter={fighter1} />
                <FighterCard fighter={fighter2} />
            </div>

            {error && <p className="error-message">{error}</p>}
            {isLoading && <p>Simulating Fight...</p>}

            <button onClick={handleFight} disabled={!fighter1 || !fighter2}>
                Start Fight
            </button>

            {fightSequence.map((event, index) => (
                <p key={index}>{event}</p>
            ))}

            {winner && <h2>Winner: {winner}</h2>}
        </div>
    );
};

export default FightSimulator;
