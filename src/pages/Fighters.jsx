import { useEffect, useState } from "react";
import { searchFighterByName } from "../api/fighterApi";
import FighterCard from "../components/fighters/FighterCard";

const Fighters = () => {
    const [fighters, setFighters] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (searchTerm.length > 2) {
            fetchFighters();
        }
    }, [searchTerm]);

    const fetchFighters = async () => {
        setError("");
        setIsLoading(true);
        try {
            const data = await searchFighterByName(searchTerm);
            setFighters(data.results || []);
        } catch (error) {
            setError("Failed to load superheroes. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fighters-container">
            <h1>Choose Your Fighter</h1>
            
            <input
                type="text"
                placeholder="Search for a superhero..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            
            {isLoading && <p>Loading superheroes...</p>}
            {error && <p className="error-message">{error}</p>}
            
            <div className="fighter-list">
                {fighters.length > 0 ? (
                    fighters.map((fighter) => (
                        <FighterCard key={fighter.id} fighter={fighter} />
                    ))
                ) : (
                    !isLoading && <p>No superheroes found</p>
                )}
            </div>
        </div>
    );
};

export default Fighters;