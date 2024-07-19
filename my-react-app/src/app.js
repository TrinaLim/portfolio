import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Projects from './pages/projects';
import Workshop from './pages/workshop';
import Volunteer from './pages/volunteer/volunteer';
import CCA from './pages/cca';
import WorkExperience from './pages/workExperience';
import Others from './pages/others';
import Navbar from './components/navbar';


function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
                <Route
                    path="/workshop"
                    element={<Workshop />}
                />
                <Route path="/volunteer" element={<Volunteer />} />
                <Route
                    path="/cca"
                    element={<CCA />}
                />
                <Route path="/workExperience" element={<WorkExperience />} />
                <Route path="/others" element={<Others />} />
            </Routes>
        </Router>
    );
}

export default App;
