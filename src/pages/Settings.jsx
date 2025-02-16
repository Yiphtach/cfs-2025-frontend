import { useState, useEffect } from "react";
import { getUserSettings, updateUserSettings } from "../api/apiClient";

const Settings = () => {
    const [user, setUser] = useState({ username: "", email: "", password: "" });
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {
        fetchUserSettings();
    }, []);

    const fetchUserSettings = async () => {
        setError("");
        setIsLoading(true);
        try {
            const data = await getUserSettings();
            setUser(data);
        } catch (error) {
            setError(`Failed to load settings: ${error.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (user.password && user.password !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        setError("");
        setSuccess("");
        try {
            await updateUserSettings(user);
            setSuccess("Settings updated successfully!");
        } catch (error) {
            setError(`Failed to update settings: ${error.message}`);
        }
    };

    return (
        <div className="settings-container">
            <h1>Account Settings</h1>

            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}
            {isLoading ? <p>Loading settings...</p> : (
                <form onSubmit={handleSubmit}>
                    <label>Username</label>
                    <input type="text" name="username" value={user.username} onChange={handleChange} />

                    <label>Email</label>
                    <input type="email" name="email" value={user.email} onChange={handleChange} />

                    <label>Password</label>
                    <input type="password" name="password" value={user.password} onChange={handleChange} />

                    <label>Confirm Password</label>
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

                    <button type="submit">Save Changes</button>
                </form>
            )}
        </div>
    );
};

export default Settings;
