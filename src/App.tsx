import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingAnimation from './components/LoadingAnimation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Education from './components/Education';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-navy min-h-screen">
      <AnimatePresence>
        {loading && <LoadingAnimation />}
      </AnimatePresence>
      
      {!loading && (
        <>
          <Hero />
          <Projects />
          <Education />
        </>
      )}
    </div>
  );
}

export default App;