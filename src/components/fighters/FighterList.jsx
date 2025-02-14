import { useState, useEffect } from "react";
import { searchFighterByName } from "../../api/fighterApi";
import FighterCard from "./FighterCard";

const FighterList = () => {
    const [fighters, setFighters] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        if (search.length > 2) {
            searchFighterByName(search).then(setFighters);
        }
    }, [search]);

    return (
        <div>
            <input type="text" placeholder="Search Fighter..." onChange={(e) => setSearch(e.target.value)} />
            <div className="grid grid-cols-3 gap-4">
                {fighters.map((fighter) => (
                    <FighterCard key={fighter.id} fighter={fighter} />
                ))}
            </div>
        </div>
    );
};

export default FighterList;
