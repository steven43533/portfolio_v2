import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Projects from './Projects.js';
import Articles from './Articles.js';
import About from './About.js';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/projects">Project</Link>
            </li>
            <li>
              <Link to="/articles">Articles</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/projects" element={<Projects />}>
            
          </Route>
          <Route path="/about" element={<About />}>
            
          </Route>
          <Route path="/articles" element={<Articles />}>
        
          </Route>
        </Routes>

      </div>
    </Router>




    // <>
    //   <Router>
    //     <div className="App">
    //       {/* Router set up */}

    //       <Route path="/" component={Projects} />
    //       <Route path="/articles" component={Articles} />
    //       <Route path="/about" component={About} />

    //       <div className="navigation">
    //         <img src={logo} className="logo" alt="" />
    //         <div className="navigation-sub">
    //           <Link to="/projects" className="item">Projects</Link>
    //           <Link to="/articles" className="item">Articles</Link>
    //           <Link to="/about" className="item">About</Link>
    //         </div>
    //       </div>
    //     </div>
    //   </Router>
    // </>
  )
}

export default App;
