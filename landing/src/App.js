import React from 'react';
import Home from './page/Home'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './page/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <div style={{backgroundColor: '#f9f9f9'}}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contacter" element={<Contact />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;