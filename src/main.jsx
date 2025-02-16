import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext';
import { FighterProvider } from './context/FighterContext';
import { FightProvider } from './context/FightContext';
import './styles/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
            <FighterProvider>
                <FightProvider>
                    <Router>
                        <App />
                    </Router>
                </FightProvider>
            </FighterProvider>
        </AuthProvider>
  </StrictMode>,
)