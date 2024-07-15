import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Workshop from './components/workshop';
import Volunteer from './components/volunteer';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/workshop" component={Workshop} />
                <Route path="/volunteer" component={Volunteer} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
