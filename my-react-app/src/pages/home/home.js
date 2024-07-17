import React from 'react';
import './home.css';
import '../index.css';

const Home = () => {
    return (
        <div className="container">
            <div className="column">
                <img
                    src="https://via.placeholder.com/400"
                    alt="A little about me"
                    className="image"
                />
            </div>
            <div className="column text">
                <h1>A Little About Me</h1>
                <p>
                    This is some text about me. Here, you can add more details about your
                    background, experience, and interests. Feel free to expand this section
                    with more information.
                </p>
            </div>
        </div>
    );
};

export default Home;
