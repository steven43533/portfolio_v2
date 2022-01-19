import React from 'react'; // Import the Component component from React
import './App.css';

function Thumbnail(props) {
    return (
        <div className="project">

            <div className="project-image">
                <img src={props.image} alt="" />
            </div>
            <div>
                <a href={props.link}>{props.title}</a>
            </div>
            <div>
                <a href={props.GitHubRepo}>GitHub Repo</a>
            </div>
            <div className='project-description'>
                <p>{props.description}</p>
            </div>
            <div className="project-category">Type: {props.category}</div>
        </div>
    )
}

export default Thumbnail;