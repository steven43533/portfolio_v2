import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Projects from './Projects'
import About from './About'
import Skills from './Skills';
import Home from './Home';

const SideNav = (props) => {
    return (
        <Router>
            <div>
                <Link to="/projects">Project</Link>
                <Link to="/skills">Skills/Technologies</Link>
                <Link to="/about">About</Link>
                <Link to="/">Home</Link>
            </div>

                <Routes>
                    <Route path="/projects" element={<Projects />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/skills" element={<Skills />}></Route>
                    <Route path="/" element={<Home />}></Route>
                </Routes>
            
        </Router>
    )
}

export default SideNav
