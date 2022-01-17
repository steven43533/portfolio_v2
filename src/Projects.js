import React from 'react';
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import './App.css';

function Projects(props) {
    return (
        <div className='projects' id='projects'>
            <h1>Projects</h1>
            <Thumbnail
                link="https://cryptobyte.herokuapp.com/"
                GitHubRepo="https://github.com/steven43533/client-cryptoBytes"
                image="https://i.postimg.cc/zDPQBdCR/Screen-Shot-2022-01-15-at-1-25-18-PM.png"
                title="CryptoBytes"
                description="Using the CoinCap API, Cryptobytes is a cryptocoin based websites that takes the top 100 coins according to Coincap and allows you to view each coin, see more detailed information, and allows you to add small comments to each coin you save/track "
                category="Desktop Application"
            />
            <Thumbnail
                link="https://lightweightkitsu.herokuapp.com/"
                GitHubRepo="https://github.com/steven43533/lightweightkitsu"
                image="https://i.postimg.cc/GhF07WTn/Screen-Shot-2022-01-15-at-2-08-59-PM.png"
                title="LightweightKitsu"
                description=" Taking advantage of Kitsu.io API, LightweightKitsu allows you to search various animes and keep track of your favorites."
                category="Desktop Application"
            />
            <Thumbnail
                link="https://steven43533.github.io/GA-Project1-VideoGame/"
                GitHubRepo="https://github.com/steven43533/GA-Project1-VideoGame"
                image="https://i.postimg.cc/QtddgpXw/Screen-Shot-2022-01-15-at-4-06-05-PM.png"
                title="Snake Game"
                description="A classic, Snake Game is what you think it is, while the project itself is straight to the point it's more-so to showcase my understanding of HTML/CSS/JS."
                category="Video Game"
            />
            
        </div>
    )
}

export default Projects;