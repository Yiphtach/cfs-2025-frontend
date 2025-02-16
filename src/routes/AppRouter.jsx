import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Fighters from './pages/Fighters';
import FightSimulator from './pages/FightSimulator';
import Leaderboard from './pages/Leaderboard';
import Profile from './pages/Profile';
import Header from './components/layout/Header';

const AppRouter = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/fighters" element={<Fighters />} />
                <Route path="/fight-simulator" element={<FightSimulator />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
// In this example, we have created a new component called AppRouter that contains the routing logic for our application. We are using the BrowserRouter component from react-router-dom to wrap our routes and provide routing functionality to our application.