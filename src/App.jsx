import {Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Fighters from './pages/Fighters';
import FightSimulator from './pages/FightSimulator';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { AuthProvider } from './context/AuthContext';
import { FighterProvider } from './context/FighterContext';
import { FightProvider } from './context/FightContext';
import AppRouter from "./routes/AppRouter";
import './styles/index.css';

function App() {
    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <AppRouter />
            <AuthProvider>
                <FighterProvider>
                    <FightProvider>
                            <Header />
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/fighters" element={<Fighters />} />
                                <Route path="/fight-simulator" element={<FightSimulator />} />
                                <Route path="/profile" element={<Profile />} />
                                <Route path="/settings" element={<Settings />} />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                            <Footer />
                    </FightProvider>
                </FighterProvider>
            </AuthProvider>
        </div>
    );
}

export default App;
