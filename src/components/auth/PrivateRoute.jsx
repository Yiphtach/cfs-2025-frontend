import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from '../../contexts/AuthContext'; // Assuming you have an AuthContext

const PrivateRoute = ({ children }) => {
    const { isAuthenticated } = useAuth(); // Get authentication status from context

    return isAuthenticated ? children : <Navigate to="/login" replace />;
};
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired
};


export default PrivateRoute;