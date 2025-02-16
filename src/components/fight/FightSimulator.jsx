import { useState } from 'react';

const FightSimulator = () => {
    const [fighters, setFighters] = useState({
        fighter1: { name: '', health: 100, attack: 10 },
        fighter2: { name: '', health: 100, attack: 10 }
    });

    const [result, setResult] = useState('');

    const handleFight = () => {
        if (!fighters.fighter1.name || !fighters.fighter2.name) {
            setResult('Please enter names for both fighters');
            return;
        }

        // Simple fight simulation
        let currentHealth1 = fighters.fighter1.health;
        let currentHealth2 = fighters.fighter2.health;
        
        while (currentHealth1 > 0 && currentHealth2 > 0) {
            currentHealth2 -= fighters.fighter1.attack;
            currentHealth1 -= fighters.fighter2.attack;
        }

        if (currentHealth1 <= 0 && currentHealth2 <= 0) {
            setResult("It's a draw!");
        } else if (currentHealth1 <= 0) {
            setResult(`${fighters.fighter2.name} wins!`);
        } else {
            setResult(`${fighters.fighter1.name} wins!`);
        }
    };

    const handleNameChange = (fighter, name) => {
        setFighters(prev => ({
            ...prev,
            [fighter]: { ...prev[fighter], name }
        }));
    };

    return (
        <div className="fight-simulator">
            <h2>Fight Simulator</h2>
            
            <div className="fighters-input">
                <div>
                    <input
                        type="text"
                        placeholder="Fighter 1 Name"
                        value={fighters.fighter1.name}
                        onChange={(e) => handleNameChange('fighter1', e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Fighter 2 Name"
                        value={fighters.fighter2.name}
                        onChange={(e) => handleNameChange('fighter2', e.target.value)}
                    />
                </div>
            </div>

            <button onClick={handleFight}>Start Fight</button>

            {result && (
                <div className="fight-result">
                    <h3>Result:</h3>
                    <p>{result}</p>
                </div>
            )}
        </div>
    );
};

export default FightSimulator;