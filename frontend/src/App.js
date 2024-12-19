import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/frontend/header/Header';

import Welcome from './components/frontend/Hero/Welcome'; // Corrected path


function App() {
    // Declare state for showing the login form
    const [showLoginForm, setShowLoginForm] = useState(false);

    return (
        <div className="App">
           <Router>
            <div>
                <header >
                <Routes>
                    
                    
                </Routes>      
                </header>

                {/* Routes */}
                <Routes>
                    <Route path="/" element={<Welcome />} />
                </Routes>
            </div>
        </Router>
        </div>
    );
}

export default App;
