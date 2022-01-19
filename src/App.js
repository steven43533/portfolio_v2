import './App.css';
import Projects from './Projects';
import Navbar from './Navbar';
import Skills from './Skills';
import About from './About';
import Typewriter from 'typewriter-effect'
import ScrollToTop from 'react-scroll-to-top';
import '@fontsource/roboto/300.css';
import { Typography } from '@mui/material';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <div>
        <div>
          <Typography variant='h2'>
            Steven Lopez
          </Typography>
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
