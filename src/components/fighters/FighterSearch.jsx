import { useState, useEffect, useCallback } from "react";
import { searchFighterByName } from "../../api/fighterApi";
import FighterCard from "./FighterCard";

const FighterSearch = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [fighters, setFighters] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (searchTerm.length > 2) {
            handleSearch();
        }
    }, [searchTerm, handleSearch]);

    const handleSearch = useCallback(async () => {
        setError("");
        setIsLoading(true);
        try {
            const data = await searchFighterByName(searchTerm);
            setFighters(data.results || []);
        } catch (err) {
            setError(`Failed to load superheroes: ${err.message}`);
        } finally {
            setIsLoading(false);
        }
    }, [searchTerm]);

    return (
        <div className="fighter-search-container">
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

export default FighterSearch;
