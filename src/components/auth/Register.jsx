import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { registerUser } from '../../api/authApi';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();  // Get login function from AuthContext

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await registerUser({ username, email, password });
            login(data.token, data.user);  // Auto-login after successful registration
        } catch (err) {
            setError(err.message || 'Registration failed');
        }
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
