import React from 'react'; // Import the Component component from React
import { Link } from 'react-router-dom'; // Import the Link component
import './App.css';

function Thumbnail(props) {
    return (
        <div className="project">
            
                <div className="project-image">
                    <img src={props.image} alt="" />
                </div>
                <a href={props.link}>{props.title}</a>
                
                <div className="project-category">{props.category}</div>
            
        </div>
    )
}

export default Thumbnail;