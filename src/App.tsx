import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingAnimation from './components/LoadingAnimation';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Achievements from './components/Achievements/Achievements';
import About from './components/AboutMe/About';
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-navy min-h-screen">
      <AnimatePresence>
        {loading && <LoadingAnimation />}
      </AnimatePresence>
      
      {!loading && (
        <>
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Education />
          <Achievements />
        </>
      )}
    </div>
  );
}

export default App;