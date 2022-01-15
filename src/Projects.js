import React from 'react';
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import './App.css';

function Projects(props) {
    return (
        <div>
            <h1>Projects</h1>
            <Thumbnail
                link="https://cryptobyte.herokuapp.com/"
                image="https://i.postimg.cc/zDPQBdCR/Screen-Shot-2022-01-15-at-1-25-18-PM.png"
                title="CryptoBytes"
                category="Desktop Application"
            />
            <Thumbnail
                link="https://lightweightkitsu.herokuapp.com/"
                image="https://i.postimg.cc/GhF07WTn/Screen-Shot-2022-01-15-at-2-08-59-PM.png"
                title="LightweightKitsu"
                category="Desktop Application"
            />
        </div>
    )
}

export default Projects;