import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const FightContext = createContext();

export const FightProvider = ({ children }) => {
    const [fightData, setFightData] = useState(null);

    return (
        <FightContext.Provider value={{ fightData, setFightData }}>
            {children}
        </FightContext.Provider>
    );
};

// Custom Hook for using FightContext
export const useFight = () => {
    return useContext(FightContext);
};
FightProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default FightContext;