import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy, useContext } from "react";
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import PrivateRoute from "./components/auth/PrivateRoute";
import AuthContext from "./context/AuthContext";

// Lazy Loading Pages
const Home = lazy(() => import("./pages/Home"));
const Fighters = lazy(() => import("./pages/Fighters"));
const Fight = lazy(() => import("./pages/Fight"));
const Leaderboard = lazy(() => import("./pages/Leaderboard"));
const Profile = lazy(() => import("./pages/Profile"));
const Settings = lazy(() => import("./pages/Settings"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
    const { loading } = useContext(AuthContext);

    if (loading) return <p>Loading authentication...</p>;

    return (
        <AuthProvider>
            <Router>
                <Header />
                <main>
                    <Suspense fallback={<p>Loading...</p>}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/fighters" element={<Fighters />} />
                            <Route path="/fight" element={<Fight />} />
                            <Route path="/leaderboard" element={<Leaderboard />} />
                            <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
                            <Route path="/settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </Suspense>
                </main>
                <Footer />
            </Router>
        </AuthProvider>
    );
};

export default App;
