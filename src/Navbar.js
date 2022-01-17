import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Projects from './Projects'
import About from './About'
import Skills from './Skills';


const Navbar = (props) => {
    return (

        <div className='navitems'>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
        </div>


    )
}

export default Navbar
