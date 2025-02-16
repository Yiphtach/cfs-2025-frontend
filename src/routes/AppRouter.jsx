import {  Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Fighters from '../pages/Fighters';
import FightSimulator from '../pages/FightSimulator';
import Profile from '../pages/Profile';
import Header from '../components/layout/Header';

const AppRouter = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/fighters" element={<Fighters />} />
                <Route path="/fight-simulator" element={<FightSimulator />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </>
    );
};

export default AppRouter;
// In this example, we have created a new component called AppRouter that contains the routing logic for our application. We are using the BrowserRouter component from react-router-dom to wrap our routes and provide routing functionality to our application.