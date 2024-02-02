import { useEffect, useState } from 'react';
import './App.scss';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Background from './Components/Hero/Background';
import Navbar from './Components/Navbar/Navbar';
import HeroSection from './Components/Portfolio/HeroSection';
import StarsCanvas from './layout/Layout';
import Project from './Components/Project/Project';

function App() {
  const [loadStarsCanvas, setLoadStarsCanvas] = useState(false);
  const [loadNavbar, setLoadNavbar] = useState(false);
  const [loadHeroSection, setLoadHeroSection] = useState(false);

  useEffect(() => {
    // Load StarsCanvas first
    setLoadStarsCanvas(true);
    // Simulate delay and load Navbar after 2s
    const navbarTimeout = setTimeout(() => {
      setLoadNavbar(true);
    }, 2000);

    // Simulate delay and load HeroSection after 3s
    const heroSectionTimeout = setTimeout(() => {
      setLoadHeroSection(true);
    }, 3000);

    // Clear timeouts to avoid unnecessary renders if the component unmounts
    return () => {
      clearTimeout(navbarTimeout);
      clearTimeout(heroSectionTimeout);
    };
  }, []);

  return (
    <>
    <section>
    {loadStarsCanvas && <StarsCanvas />}
    {loadNavbar && (
        <Navbar />
    )}
        {loadHeroSection && (
            <HeroSection />
        )}
      <Background /> 
    </section>
      {/* <section id='About-wrapper'>
        {loadHeroSection && <About />}
      </section> */}
      {/* <Project/> */}
      <section id='footer'>
        {loadHeroSection && <Footer />}
      </section>
    </>
  );
}

export default App;
