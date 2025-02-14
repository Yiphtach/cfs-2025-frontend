// src/context/FighterContext.jsx
import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const FighterContext = createContext();
export const FighterProvider = ({ children }) => {
    const [fighters, setFighters] = useState([]);

    return (
        <FighterContext.Provider value={{ fighters, setFighters }}>
            {children}
        </FighterContext.Provider>
    );
};

FighterProvider.propTypes = {
    children: PropTypes.node.isRequired
};

// Custom hook for easy context usage
export const useFighter = () => {
    return useContext(FighterContext);
};
