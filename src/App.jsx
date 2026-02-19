import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Competencies from './components/Competencies';
import Skills from './components/Skills';
import Events from './components/Events';
import Volunteering from './components/Volunteering';
import Research from './components/Research';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * Main App Component
 * Portfolio website for Dnyaneshwar Jayram Jadhav
 * Features:
 * - Dark/Light mode toggle with localStorage
 * - Smooth scrolling navigation
 * - Auto-scrolling events section
 * - Responsive design
 * - Modern UI with animations
 */
function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Competencies />
      <Skills />
      <Events />
      <Volunteering />
      <Research />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
