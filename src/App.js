import './App.css';
import Projects from './Projects';
import Navbar from './Navbar';
import Skills from './Skills';
import About from './About';
import Typewriter from 'typewriter-effect'
import ScrollToTop from 'react-scroll-to-top';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <div>
        <div>
          <h1>Steven Lopez</h1>
          <Typewriter
            options={{
              strings: ['Web Developer', 'Always Learning', 'Self-Driven'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <Projects />
      <Skills />
      <About />
      <ScrollToTop smooth />
    </div>
    

  )
}

export default App;
