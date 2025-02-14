import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import axios from "../api/apiClient";
import AuthContext from '../context/AuthContext';

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("token") || null);

    useEffect(() => {
        if (token) {
            axios.get("/auth/user", { headers: { Authorization: `Bearer ${token}` } })
                .then((response) => setUser(response.data))
                .catch(() => logout());
        }
    }, [token]);

    const login = async (credentials) => {
        const { data } = await axios.post("/auth/login", credentials);
        localStorage.setItem("token", data.token);
        setToken(data.token);
        setUser(data.user);
    };

    const register = async (credentials) => {
        const { data } = await axios.post("/auth/register", credentials);
        login(credentials);  // Automatically log in after registration
    };

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
};
