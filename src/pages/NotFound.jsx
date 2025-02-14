import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import notFoundImage from "../assets/images/404-hero.png";

const NotFound = () => {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(5);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);

        setTimeout(() => {
            navigate("/");
        }, 5000);

        return () => clearInterval(timer);
    }, [navigate]);

    const handleSearch = (e) => {
        e.preventDefault();
        window.location.href = `/fighters/search/${searchQuery}`;
    };

    return (
        <div className="not-found-container">
            <img src={notFoundImage} alt="404 Not Found" className="not-found-image" />
            <h1>404 - Page Not Found</h1>
            <p>Oops! The page you're looking for does not exist.</p>
            <p>Redirecting to home in {countdown} seconds...</p>

            <form onSubmit={handleSearch}>
                <input 
                    type="text" 
                    placeholder="Search for a superhero..." 
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            <Link to="/" className="back-home-button">Go Back Home</Link>
        </div>
    );
};

export default NotFound;
