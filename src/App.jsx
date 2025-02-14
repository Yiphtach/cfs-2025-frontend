import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Fighters from './pages/Fighters';
import FightSimulator from './pages/FightSimulator';
import Leaderboard from './pages/Leaderboard';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { AuthProvider } from './context/AuthContext';
import { FighterProvider } from './context/FighterContext';
import { FightProvider } from './context/FightContext';
import './styles/index.css';

function App() {
    return (
        <AuthProvider>
            <FighterProvider>
                <FightProvider>
                    <Router>
                        <Header />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/fighters" element={<Fighters />} />
                            <Route path="/fight-simulator" element={<FightSimulator />} />
                            <Route path="/leaderboard" element={<Leaderboard />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/settings" element={<Settings />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                        <Footer />
                    </Router>
                </FightProvider>
            </FighterProvider>
        </AuthProvider>
    );
}

export default App;
