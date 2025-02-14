// src/components/layout/Header.jsx
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-red-600 p-4 text-white shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">
                    <Link to="/">Comic Fight Simulator</Link>
                </h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link to="/fighters" className="hover:underline">Fighters</Link></li>
                        <li><Link to="/fight-simulator" className="hover:underline">Fight</Link></li>
                        <li><Link to="/leaderboard" className="hover:underline">Leaderboard</Link></li>
                        <li><Link to="/profile" className="hover:underline">Profile</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
